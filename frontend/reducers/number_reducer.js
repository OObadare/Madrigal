import merge from "lodash/merge";

import {RECEIVE_LIKE_NUM, RECEIVE_PLAYLIST_NUM} from "../actions/user_actions";


const numberReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIKE_NUM:
      const likes = action.payload;
      return merge({}, state, { likes });
    case RECEIVE_PLAYLIST_NUM:
      const playlists = action.payload;
      return merge({}, state, { playlists });
    default:
      return state;
  }
};

export default numberReducer;
