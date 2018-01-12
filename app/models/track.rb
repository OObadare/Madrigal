class Track < ApplicationRecord

  validates :title, :album, :artist, presence: true

  has_many :playlists, through: :tracklists
  has_attached_file :song
  validates_attachment_content_type :song, content_type: [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

end
