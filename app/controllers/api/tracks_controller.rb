class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.save!
  end

  def show
    @track = Track.find(params[:id])
  end

  def index
    if params[:playlist_id]
      @tracks = Playlist.find_by_id(params[:playlist_id]).tracks
    else
      @tracks = Track.all
    end
  end

  def track_params
    params.require(:track).permit(:title, :artist, :album, :song, :playlist_id)
  end
end
