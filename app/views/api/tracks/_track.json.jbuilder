json.extract! track, :id, :title, :artist, :album, :song_file_name, :song_content_type, :song_file_size, :song_updated_at
json.song asset_path(track.song)
