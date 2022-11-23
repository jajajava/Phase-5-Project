class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :task
      t.string :category

      t.timestamps
    end
  end
end
