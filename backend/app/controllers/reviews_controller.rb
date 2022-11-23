class ReviewsController < ApplicationController
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

    def destroys
        if current_user.review
        review = current_user.review
        render json: review.destroy, status: :ok
        else
        render json: {error: "This user does not have a review"}, status: 404
        end
    end

    private

    def review_params
        params.permit(:stars, :title, :message, :user_id)
    end
end
