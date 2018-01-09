class AddAttachmentArtToPlaylists < ActiveRecord::Migration[5.1]
  def self.up
    change_table :playlists do |t|
      t.attachment :art
    end
  end

  def self.down
    remove_attachment :playlists, :art
  end
end
