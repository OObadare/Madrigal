class Like < ApplicationRecord

  validates :user_id, :playlist_id, presence: true

  belongs_to :user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :playlist,
  class_name: "Playlist",
  foreign_key: :playlist_id,
  primary_key: :id

end
