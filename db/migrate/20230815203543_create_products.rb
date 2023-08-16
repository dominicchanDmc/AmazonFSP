class CreateProducts < ActiveRecord::Migration[7.0]
  def change
      create_table :products do |t|
      t.string :product_name, null: false
      t.string :description
      t.string :categories, null: false
      t.float :price, null: false
      t.float :discount
      t.timestamps
    end
    add_index :products, :product_name
    add_index :products, :categories
  end
end
