class RemoveUrlAndDatasetIdFromSavedDatasets < ActiveRecord::Migration[6.0]
  def change
    remove_column :saved_datasets, :url, :string
    remove_column :saved_datasets, :dataset_id, :integer
  end
end
