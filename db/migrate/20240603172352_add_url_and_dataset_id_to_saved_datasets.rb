class AddUrlAndDatasetIdToSavedDatasets < ActiveRecord::Migration[6.0]
  def change
    add_column :saved_datasets, :url, :string
    add_column :saved_datasets, :dataset_id, :string

    # Adding unique constraint for dataset_id per user
    add_index :saved_datasets, [:decidim_user_id, :dataset_id], unique: true, name: "index_saved_datasets_on_user_and_dataset_id"
  end
end
