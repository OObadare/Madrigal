import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_LIKE_NUM = "RECEIVE_LIKE_NUM";
export const RECEIVE_PLAYLIST_NUM = "RECEIVE_PLAYLIST_NUM";

export const receiveUser = function(payload){
  return {
    type: RECEIVE_USER,
    payload: payload
  };
};

export const receivePlaylists = function(payload) {
  return {
    type: RECEIVE_PLAYLISTS,
    payload: payload
  };
};

export const receiveLikes = function(payload) {
  return {
    type: RECEIVE_LIKE_NUM,
    payload: payload
  };
};

export const receivePlaylistNum = function(payload) {
  return {
    type: RECEIVE_PLAYLIST_NUM,
    payload: payload
  };
};

export const getUser = (id) => (dispatch) => {
  UserUtil.fetchUser(id).then(payload => {
    return dispatch(receiveUser(payload));
  });
};

export const getLikedPlaylists = (userId) => (dispatch) => {
  UserUtil.fetchLikedPlaylists(userId).then((payload) => {
    return dispatch(receivePlaylists(payload));
  });
};

export const getLikedNum = (userId) => (dispatch) => {
  UserUtil.fetchLikes(userId).then((payload) => {
    return dispatch(receiveLikes(payload));
  });
};

export const getPlaylistNum = (userId) => (dispatch) => {
  UserUtil.fetchPlaylists(userId).then((payload) => {
    return dispatch(receivePlaylistNum(payload));
  });
};
