import merge from "lodash/merge";

import {RECEIVE_ID, RECEIVE_IDS} from "../actions/tracklist_actions";
const idReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ID:
      const id = action.id;
      return merge({}, {id});
    case RECEIVE_IDS:
      const ids = action.ids;
      return merge({}, { ids });
    default:
      return state;
  }
};

export default idReducer;
