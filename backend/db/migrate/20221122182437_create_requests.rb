class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.integer :user_id
      t.integer :job_id
      t.string :address
      t.boolean :is_urgent
      t.string :status

      t.timestamps
    end
  end
end
