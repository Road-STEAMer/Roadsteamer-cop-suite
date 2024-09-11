Rails.application.routes.draw do
  get 'test/show'
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  get "/idra" => "idra#index"

  post "/idra_create" => "idra#create" 
  
  get '/idra_update', to: 'idra#update'

  post '/idra_delete', to: 'idra#delete'

  get '/idra_modal_editor', to: 'idra#modal_editor'

  get 'idra/datasets', to: 'idra#datasets'

  mount Decidim::FileAuthorizationHandler::AdminEngine => '/admin'

  

  mount Decidim::Core::Engine => '/'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
