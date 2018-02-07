import merge from 'lodash/merge';

import { RECEIVE_USER, RECEIVE_CURRENT_USER} from "../actions/user_actions";

const userReducer = (state = {user: ""}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.payload;
      return merge({}, { user });
    default:
      return state;
  }
};

export default userReducer;
