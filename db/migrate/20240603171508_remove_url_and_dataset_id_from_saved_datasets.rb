class RemoveUrlAndDatasetIdFromSavedDatasets < ActiveRecord::Migration[6.1]
  def change
    # Check if the column :url exists and then remove it
    if column_exists?(:saved_datasets, :url)
      remove_column :saved_datasets, :url, :string
    end

    # Check if the column :dataset_id exists and then remove it
    if column_exists?(:saved_datasets, :dataset_id)
      remove_column :saved_datasets, :dataset_id, :integer
    end
  end
end
