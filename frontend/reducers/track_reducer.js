import merge from "lodash/merge";

import {RECEIVE_TRACK, RECEIVE_TRACKS} from "../actions/track_actions";


const trackReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK:
      const track = action.track;
      return merge({}, state, { [track.id]: track });
    case RECEIVE_TRACKS:
      const tracks = action.tracks;
      return merge({}, { tracks });
    default:
      return state;
  }
};

export default trackReducer;
