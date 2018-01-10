json.partial! "api/playlists/playlist", playlist: @playlist

json.image_url asset_path(@playlist.art.url(:medium))
