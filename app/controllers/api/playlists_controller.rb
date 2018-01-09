class Api::PlaylistsController < ApplicationRecord

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save!
      render "api/playlists/show"
    else
      render json:["There was an error creating your playlist"]
    end
  end

  def show
    @playlist = Playlist.find(params[:id])

    if @playlist
      render "api/playlists/show"
    else
      render json:["This playlist could not be found"]
    end
  end


  def update
    @playlist = Playlist.find(params[:id])

    if@playlist.update!(playlist_params)
      render "/api/playlists/show"
    else
      render json:["There was a problem updating this playlist"]
  end

  def playlist_params
    params.require(:playlist).permit(:title, :user_id, :image_location, :description, :art_file_name)
  end
end
