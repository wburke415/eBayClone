Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :destroy]
    get 'products/search', :to => 'products#search'
    resources :products, only: [:index, :show, :create, :update, :destroy]
    resources :bids, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end

end
