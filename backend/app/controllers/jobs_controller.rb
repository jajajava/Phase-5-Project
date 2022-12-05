class JobsController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        render json: Job.all, status: :ok
    end

end
