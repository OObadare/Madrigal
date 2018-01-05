import merge from 'lodash/merge';

import { SHOW_MODAL} from "../actions/modal_actions";
import { HIDE_MODAL} from "../actions/modal_actions";

const modalReducer = (state = {}, action) => {
  switch(action.type) {
    case SHOW_MODAL: {
      return {component: action.component};
    }
    case HIDE_MODAL: {
      return {component: ""};
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
