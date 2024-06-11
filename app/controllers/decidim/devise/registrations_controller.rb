module Decidim
  module Devise
    # This controller customizes the behaviour of Devise's RegistrationsController
    # so we can specify a custom layout.
    class RegistrationsController < ::Devise::RegistrationsController
      include FormFactory
      include Decidim::DeviseControllers
      include NeedsTosAccepted

      helper Decidim::PasswordsHelper

      before_action :check_sign_up_enabled
      before_action :configure_permitted_parameters

      invisible_captcha

      # def new
      #   redirect_to root_path, alert: "Registration is currently disabled."
      # end

      # def create
      #   redirect_to root_path, alert: "Registration is currently disabled."
      # end

      protected

      def check_sign_up_enabled
        redirect_to new_user_session_path unless current_organization.sign_up_enabled?
      end

      def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :tos_agreement])
      end

      # Called before resource.save
      def build_resource(hash = nil)
        super(hash)
        resource.organization = current_organization
      end

      def devise_mapping
        ::Devise.mappings[:user]
      end
    end
  end
end
