class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :stars
      t.string :title
      t.string :message
      t.integer :user_id
      t.boolean :is_verified

      t.timestamps
    end
  end
end
