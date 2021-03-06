class Playlist < ApplicationRecord

  validates :title, :user_id, presence: true

  has_attached_file :art, styles: { medium: "500x500>" }, default_url: "/images/cover.1024.jpeg"
  validates_attachment_content_type :art, content_type: /\Aimage\/.*\z/

  belongs_to :user ,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id

  has_many :tracklists
  has_many :tracks, through: :tracklists
  has_many :users, through: :likes

end
