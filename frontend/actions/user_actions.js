import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";

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
