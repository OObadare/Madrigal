class Track < ApplicationRecord

  validates :title, :album, :artist, presence: true

  has_many :playlists, through: :tracklists
  has_attached_file :song
  validates_attachment_content_type :song, content_type: /\Aaudio\/.*\z/

end
