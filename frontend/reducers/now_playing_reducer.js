import merge from "lodash/merge";

import {RECEIVE_PLAYING_TRACK, RECEIVE_PLAYING_TRACKS} from "../actions/now_playing_actions";


const nowPlayingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYING_TRACK:
      const track = action.track;
      return merge({}, state, { [track.id]: track });
    case RECEIVE_PLAYING_TRACKS:
      const tracks = action.tracks;
      return merge({}, { tracks });
    default:
      return state;
  }
};

export default nowPlayingReducer;
