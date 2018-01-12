class Api::TracklistsController < ApplicationController

  def create
    debugger
    @tracklist = Tracklist.new(tracklist_params)
    @tracklist.save!

  end

  def index
    @tracklists = Tracklist.all
  end

  def tracklist_params
    params.require(:tracklist).permit(:playlist_id, :track_id, :annotation)
  end
end
