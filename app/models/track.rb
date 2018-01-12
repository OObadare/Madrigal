class Track < ApplicationRecord

  validates :title, :album, :artist, presence: true

  has_many :playlists, through: :tracklists
  has_attached_file :song
  validates_attachment_content_type :song, content_type: [ 'application/mp3', 'application/x-mp3', 'audio/mpeg', 'audio/mp3' ]

end
