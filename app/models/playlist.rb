class Playlist < ApplicationRecord

  validates :title, :user_id, presence: true

  belongs_to: :users
  has_many: :tracks, through: :tracklists
  has_many: :users, through: :likes

end
