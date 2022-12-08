class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

    def index
        if current_user.is_admin
            render json: User.all, status: :ok
        else
            render json: {error: "Not authorized"}, status: 401
        end
    end

    def create 
        user = User.create!(user_params)
        @token = encode_token(user_id: user.id)
        render json: {
            user: UserSerializer.new(user), 
            token: @token
        }, status: :created
    end

    def update
        if current_user.is_admin
            user = User.find(params[:id])
            user.update(edit_params)
        end
        render json: user, status: :ok
    end

    def destroy
        user = current_user
        user.destroy
        render json: "User has been deleted", status: :ok
    end

    def me
        render json: current_user, status: :ok
    end

    private

    def user_params 
        defaults = {is_admin: false, is_verified: false}
        params.permit(:name, :password, :email, :phone).merge(defaults)
    end

    def edit_params
        params.permit(:is_verified)
    end

    def handle_invalid_record(e)
            render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
