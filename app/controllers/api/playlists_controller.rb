class Api::PlaylistsController < ApplicationController

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

  def index
    if params[:user_id] != nil && params[:like] == nil
      @playlists = Playlist.where(user_id: params[:user_id].to_i)
    elsif params[:user_id] && params[:like] != nil
      @playlists = User.find_by_id(params[:user_id].to_i).playlists
    else
      @playlists = Playlist.all
    end
  end


  def update
    @playlist = Playlist.find(params[:id])

    if@playlist.update!(playlist_params)
      render "/api/playlists/show"
    else
      render json:["There was a problem updating this playlist"]
    end
  end

  def playlist_params
    params.require(:playlist).permit(:title, :user_id, :description, :art)
  end

end
