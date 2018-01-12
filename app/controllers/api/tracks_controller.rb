class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.save!

  end

  def show
    @track = Track.find(params[:id])
  end

  def index
    @tracks = Track.all
  end

  def track_params
    params.require(:track).permit(:title, :artist, :album, :song)
  end
end
