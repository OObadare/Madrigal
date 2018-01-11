class Tracklist < ApplicationRecord

  validates :track_id, presence: true

  belongs_to :playlist ,
  class_name: "Playlist",
  foreign_key: :playlist_id,
  primary_key: :id

  belongs_to :track ,
  class_name: "Track",
  foreign_key: :track_id,
  primary_key: :id

end
