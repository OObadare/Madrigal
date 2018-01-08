
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import modals from './modal_reducer';
import users from "./user_reducer";

const rootReducer = combineReducers({
  session,
  modals,
  errors,
  users
});

export default rootReducer;
