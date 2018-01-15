import merge from "lodash/merge";

import {RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS} from "../actions/playlist_actions";


const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYLIST:
      const playlist = action.payload;
      return merge({}, { playlist });
    case RECEIVE_PLAYLISTS:
      const playlists = action.payload;
      return merge({}, { playlists });
    default:
      return state;
  }
};

export default playlistReducer;
