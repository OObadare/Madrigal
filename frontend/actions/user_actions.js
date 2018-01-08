import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = function(payload){
  return {
    type: RECEIVE_USER,
    user: payload.user
  };
};

export const getUser = (id) => (dispatch) => {
  UserUtil.fetch(id).then(payload => {
    return dispatch(receiveUser(payload));
  });
};
