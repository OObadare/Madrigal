class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :title
      t.integer :user_id
      t.string :image_location
      t.string :description
    end
  end
end
