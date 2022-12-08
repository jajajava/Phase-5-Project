Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :destroy]
  resources :requests, only: [:index, :create, :update]
  resources :jobs, only: [:index]
  resources :users, only: [:index, :show, :create, :update] # Index and show are going to only be made available to Admins
  get "/me", to: "users#me"
  delete "/me", to: "users#destroy"
  post "/auth/login", to: "auth#login"
  delete "/reviews", to: "reviews#destroys"
  get "/show_mine", to: "requests#show_mine"
end
