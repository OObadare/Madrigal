import merge from "lodash/merge";

import {RECEIVE_TRACKLIST, RECEIVE_TRACKLISTS} from "../actions/tracklist_actions";


const tracklistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACKLIST:
      const tracklist = action.tracklist;
      return merge({}, state, { [tracklist.id]: tracklist });
    case RECEIVE_TRACKLISTS:
      const tracklists = action.tracklists;
      return merge({}, { tracklists });
    default:
      return state;
  }
};

export default tracklistReducer;
