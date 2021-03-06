Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :playlists
    end
    resource :session, only: [:create, :destroy, :show]
    resources :likes, only: [:index, :create, :destroy, :show]
    resources :playlists do
      resources :tracks
    end
    resources :tracks
    resources :tracklists
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
