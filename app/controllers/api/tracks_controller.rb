class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.save!

  end

  def index
    @tracks = Tracks.all
  end

  def track_params
    params.require(:track).permit(:title, :artist, :album, :song_file_name)
  end
end
