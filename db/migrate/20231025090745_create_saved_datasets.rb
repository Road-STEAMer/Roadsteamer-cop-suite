class CreateSavedDatasets < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_datasets do |t|
      t.string :title, unique: true
      t.references :admin, foreign_key: { to_table: :admins } # This creates a foreign key
      t.timestamps
    end
  end
end
