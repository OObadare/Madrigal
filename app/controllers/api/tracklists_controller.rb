class Api::TracklistController < ApplicationController

  def create
    @tracklist = Tracklist.new(tracklist_params)
    @tracklist.save!

  end

  def index
    @tracklists = Tracklist.all
  end

  def track_params
    params.require(:tracklist).permit(:playlist_id, :track_id, :annotation)
  end
end
