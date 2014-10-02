class CreateSpotImages < ActiveRecord::Migration
  def change
    create_table :spot_images do |t|
      t.references :spot, index: true
      t.binary :data
      t.string :content_type

      t.timestamps
    end
  end
end
