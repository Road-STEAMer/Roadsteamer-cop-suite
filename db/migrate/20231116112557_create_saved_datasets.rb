class CreateSavedDatasets < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_datasets do |t|
      t.string :title
      t.references :decidim_user, foreign_key: { to_table: :decidim_users }

      t.timestamps
    end
  end
end
