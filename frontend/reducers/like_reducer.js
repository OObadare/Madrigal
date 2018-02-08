import merge from "lodash/merge";

import {RECEIVE_LIKE, RECEIVE_LIKES} from "../actions/playlist_actions";


const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIKE:
      const like = action.payload;
      return merge({}, { like });
    case RECEIVE_LIKES:
      const likes = action.payload;
      return merge({}, { likes });
    default:
      return state;
  }
};

export default likeReducer;
