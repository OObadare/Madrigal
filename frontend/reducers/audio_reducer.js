import merge from "lodash/merge";

import {RECEIVE_AUDIO} from "../actions/track_actions";


const audioReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_AUDIO:
      const audio = action.track;
      return merge({}, audio );
    default:
      return state;
  }
};

export default audioReducer;
