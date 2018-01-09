import * as PlaylistUtil from '../util/playlist_util';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const FETCH_PLAYLIST = "FETCH_PLAYLIST";

export const receivePlaylist = function(payload){
  return {
    type: RECEIVE_PLAYLIST,
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
    PlaylistUtil.getPlaylist(id).then((playlist) => (
      dispatch(receivePlaylist(playlist))
    ))
  );
};
