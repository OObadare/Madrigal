import * as PlaylistUtil from '../util/playlist_util';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const FETCH_PLAYLIST = "FETCH_PLAYLIST";
export const RECEIVE_LIKE = "CREATE_LIKE";
export const FETCH_LIKES = "FETCH_LIKES";

export const receivePlaylist = function(payload){
  return {
    type: RECEIVE_PLAYLIST,
    payload: payload
  };
};

export const receivePlaylists = function(payload) {
  return {
    type: RECEIVE_PLAYLISTS,
    payload: payload
  };
};

export const createPlaylist = (playlist) => (dispatch) => {
  return (
    PlaylistUtil.submitPlaylist(playlist).then((playlist)=> (
      dispatch(receivePlaylist(playlist))
    ))
  );
};

export const getPlaylist = (id) => (dispatch) => {
  return (
    PlaylistUtil.fetchPlaylist(id).then((playlist) => (
      dispatch(receivePlaylist(playlist))
    ))
  );
};


export const getAllPlaylists = () => (dispatch) => {
  return (
    PlaylistUtil.fetchAllPlaylists().then((playlists) => (
      dispatch(receivePlaylists(playlists))
    ))
  );
};

export const getUserPlaylists = (user_id) => (dispatch) => {
  return (
    PlaylistUtil.fetchUserPlaylists(user_id).then((playlists) => (
      dispatch(receivePlaylists(playlists))
    ))
  );
};
