class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.references :course, index: true
      t.float :lat
      t.float :lng
      t.integer :order

      t.timestamps
    end
  end
end
