class AddUrlToSavedDatasets < ActiveRecord::Migration[6.1]
  def change
    add_column :saved_datasets, :url, :string
  end
end
