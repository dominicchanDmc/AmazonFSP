class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :overall_rating, null: false
      t.string :review_headline, null: false
      t.string :review, null: false
      t.references :reviewer, null:false, foreign_key:{to_table: :users}
      t.references :product, null:false, foreign_key:true
      t.timestamps
    end
    add_index :ratings, [:reviewer_id, :product_id], unique: true
  end
end
