import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = function(payload){
  return {
    type: RECEIVE_USER,
    payload: payload
  };
};

export const getUser = (id) => (dispatch) => {
  UserUtil.fetchUser(id).then(payload => {
    return dispatch(receiveUser(payload));
  });
};
