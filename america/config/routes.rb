Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cities, only: [:index, :new, :create, :show]
    end
  end

  # resources :states, only: [:index, :new, :create, :show]
  # get '/states', to: 'states#index'
end
