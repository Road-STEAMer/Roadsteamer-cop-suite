class SavedDataset < ApplicationRecord
    belongs_to :decidim_user, class_name: 'Decidim::User'

    validates :title, presence: true
end
