class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :email
      t.string :phone
      t.boolean :is_admin
      t.boolean :is_verified

      t.timestamps
    end
  end
end
