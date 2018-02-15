import merge from "lodash/merge";

import {RECEIVE_LIKE, RECEIVE_LIKES} from "../actions/playlist_actions";


const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  const likes = action.payload;
  switch(action.type) {
    case RECEIVE_LIKE:
      return merge({}, { likes });
    case RECEIVE_LIKES:
      return merge({}, { likes });
    default:
      return state;
  }
};

export default likeReducer;
