import merge from "lodash/merge";

import {RECEIVE_PLAYLIST} from "../actions/playlist_actions";


const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYLIST:
      const playlist = action.payload;
      return merge({}, { playlist });
    default:
      return state;
  }
};

export default playlistReducer;
