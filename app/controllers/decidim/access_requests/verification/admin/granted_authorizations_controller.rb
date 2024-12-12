# frozen_string_literal: true

module Decidim
  module AccessRequests
    module Verification
      module Admin
        class GrantedAuthorizationsController < Decidim::Admin::ApplicationController
          include DetectableVerificationManifest

          layout "decidim/admin/users"

          helper Decidim::Messaging::ConversationHelper

          before_action :check_verification_manifest
          before_action :load_user, only: [:create]
          before_action :load_authorization, only: [:create]

          def index
            enforce_permission_to :index, :authorization

            @granted_authorizations = granted_authorizations
          end

          def new
            enforce_permission_to :read, :authorization
            @query = params[:q]
            @state = params[:state]

            authorized_user_ids = granted_authorizations.pluck(:decidim_user_id)

            @users =
              Decidim::Admin::UserFilter.for(
                current_organization.users.not_deleted
                  .where.not(
                    id: authorized_user_ids
                  ),
                @query,
                @state
              ).page(params[:page])
          end

          def create
            enforce_permission_to :create, :authorization, authorization: @authorization

            @form = RequestForm.new(
              handler_handle: verification_manifest.name
            ).with_context(current_organization: current_organization)

            ConfirmUserAccessRequest.call(authorization, @form, session) do
              on(:ok) do
                flash[:notice] = t("pending_authorizations.update.success", scope: "decidim.access_requests.verification.admin")
                redirect_to granted_authorizations_path
              end

              on(:invalid) do
                flash[:alert] = t("pending_authorizations.update.error", scope: "decidim.access_requests.verification.admin")
                redirect_to granted_authorizations_path
              end
            end
          end

          def destroy
            enforce_permission_to :destroy, :authorization, authorization: authorization

            DestroyAuthorization.call(authorization) do
              on(:ok) do
                flash[:notice] = t("granted_authorizations.destroy.success", scope: "decidim.access_requests.verification.admin")
                redirect_to granted_authorizations_path
              end

              on(:invalid) do
                flash[:alert] = t("granted_authorizations.destroy.error", scope: "decidim.access_requests.verification.admin")
                redirect_to granted_authorizations_path
              end
            end
          end

          private

          def check_verification_manifest
            redirect_to decidim_admin.users_path if verification_manifest.nil?
          end

          def granted_authorizations
            Decidim::Verifications::Authorizations.new(
              organization: current_organization,
              name: verification_manifest.name,
              granted: true
            ).query.page(params[:page]).per(15)
          end

          def authorization
            @authorization ||= Authorization.find_by(
              id: params[:id],
              name: verification_manifest.name
            )
          end

          def load_authorization
            @authorization = Authorization.find_or_initialize_by(
              user: @user,
              name: verification_manifest.name
            )
          end

          def load_user
            @user = User.find(params[:user_id])
          end
        end
      end
    end
  end
end
