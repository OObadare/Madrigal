class Track < ApplicationRecord

  validates :title, :album, :artist, presence: true

  has_many :playlists, through: :tracklists

end
