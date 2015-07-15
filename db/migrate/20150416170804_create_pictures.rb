class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :artist
      t.string :title
      t.string :url
      t.string :picture

      t.timestamps null: false
    end
  end
end
