json.extract! playlist, :id, :title, :user_id, :image_location, :description, :art_file_name, :art_content_type, :art_file_size, :art_updated_at
json.art asset_path(playlist.art)
