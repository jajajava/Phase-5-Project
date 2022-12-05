class RequestsController < ApplicationController
    def index
        if current_user.is_admin
        render json: Request.all, status: :ok
        else
        render json: {error: "Not authorized"}, status: 401
        end
    end

    def show_mine
        if current_user.is_admin == false
            requests = current_user.requests
            render json: requests, status: :ok
        else
            render json: {error: "Admin user does not have requests"}
        end
    end

    def create
        if current_user.is_admin == false
        request = Request.create!(request_params)
        render json: request, status: :ok
        else
        render json: {error: "Admin user cannot make requests"}, status: 401
        end
    end

    def update
        request = Request.find(params[:id])
        request.update!(params_update)
        render json: request, status: :ok
    end

    private

    def request_params
        defaults = {user_id: current_user.id, status: 'pending' }
        params.permit(:user_id, :job_id, :address, :is_urgent, :status, :custom).merge(defaults)
    end

    def params_update
        params.permit(:status)
    end
end
