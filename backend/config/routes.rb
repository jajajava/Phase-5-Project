Rails.application.routes.draw do
  resources :reviews, only: [:create, :destroy]
  resources :requests, only: [:index, :create, :patch]
  resources :jobs, only: [:index]
  resources :users, only: [:index, :show, :create, :destroy] # Index and show are going to only be made available to Admins
  get "/me", to: "users#me"
  post "/auth/login", to: "auth#login"
end
