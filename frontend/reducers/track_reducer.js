import merge from "lodash/merge";

import {RECEIVE_TRACK, RECEIVE_TRACKS, LOAD_NOW, UNLOAD} from "../actions/track_actions";


const trackReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case LOAD_NOW:
      const load = true;
      return merge({}, state, {load: load});
    case UNLOAD:
      const unload = false;
      return merge({}, state, {load: unload});
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
