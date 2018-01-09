class Playlist < ApplicationRecord

  validates :title, :user_id, presence: true

  belongs_to: :users
  has_many: :tracks

end
