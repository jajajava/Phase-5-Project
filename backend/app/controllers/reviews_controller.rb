class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :errors
    skip_before_action :authorized, only: [:index]

    def index
        render json: Review.all, status: :ok
    end

    def create
        if current_user.is_admin == false
            review = Review.create!(review_params)
            render json: review, status: :ok
        else
            render json: {error: "Not authorized"}, status: 401
        end
    end


    def destroy
        review = Review.find(params[:id])
        user = review.user
        if current_user.id == review.user.id
        review.destroy
        render json: [], status: 200
        else
        render json: {error: "Not authorized"}, status: 401
        end
    end

    private

    def review_params
        params.permit(:stars, :title, :message, :user_id)
    end

    def errors e
        render json: {error: "You already posted a review!"}, status: 400
    end
end
