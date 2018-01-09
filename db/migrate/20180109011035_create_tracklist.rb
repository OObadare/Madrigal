class CreateTracklist < ActiveRecord::Migration[5.1]
  def change
    create_table :tracklists do |t|
      t.integer :playlist_id
      t.integer :track_id
    end
  end
end
