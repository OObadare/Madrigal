class Api::LikesController < ApplicationController

  def create
    debugger
    @like = Like.new(like_params)
    @like.save!
  end

  def show
    if params[:playlist_id]
      @likes = Like.where(playlist_id: params[:playlist_id].to_i)
      debugger
    elsif params[:user_id]
      @likes = Like.where(user_id: params[:user_id].to_i)
    end

  end

  def index
    if params[:user_id]
      #the user show page should show all the playlists liked by the user
      @likes = likes.find_by(user_id: user_id)
    elsif params[:playlist_id]
      #the playlist page should check to see if the likes on the playlist includes the current user's id
      @likes = likes.find_by(playlist_id: playlist_id)
    end
  end

  def destroy
    #should just make the like aplode
    @like = like.find_by_params(params[:user_id], params[:playlist_id])
    @like.destroy

  end

  def like_params
    params.permit(:like, :user_id, :playlist_id)
  end

end
