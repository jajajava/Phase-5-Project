class ProjectsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def index
        render json: Project.all, status: :ok
    end
end
