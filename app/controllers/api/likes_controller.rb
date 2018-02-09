class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save!
      render "api/likes/show"
    else
      render json:["There was an error creating your playlist"]
    end
  end

  def show
    @like = Like.find(params[:id])
  end

  def index
    if params[:playlist_id] != nil
      #the user show page should show all the playlists liked by the user
      @likes = Like.where(playlist_id: params[:playlist_id].to_i)
    elsif params[:user_id] != nil
      #the playlist page should check to see if the likes on the playlist includes the current user's id
      @likes = Like.where(user_id: params[:user_id].to_i)
    end
  end

  def destroy
    #should just make the like aplode
    @like = Like.find_by_params(params[:user_id], params[:playlist_id])
    @like.destroy

  end

  def like_params
    params.permit(:like, :user_id, :playlist_id)
  end

end
