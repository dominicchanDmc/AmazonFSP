Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :cart_items, only: [:index]
    end
    delete '/cart_items/delete_all', to: 'cart_items#delete_all'

    resources :products, only: [:index,:show] do
      resources :ratings, only: [:create]
    end
    resource :session, only: [:show, :create, :destroy]
    resources :cart_items, only: [:create,:update,:destroy]
    resources :ratings, only: [:show,:update,:destroy]

  end


  get '/favicon.ico', to: 'static_pages#favicon'
  get '*path',
  to: "static_pages#frontend",
  constraints: lambda{|req| !req.xhr? && req.format.html?}
  
  root to: "static_pages#frontend"

end
