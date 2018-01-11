
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import modals from './modal_reducer';
import users from "./user_reducer";
import playlists from "./playlist_reducer";
import tracks from "./track_reducer";
import tracklists from "./tracklist_reducer";
import ids from "./id_reducer";

const rootReducer = combineReducers({
  session,
  modals,
  errors,
  users,
  playlists,
  tracks,
  tracklists,
  ids
});

export default rootReducer;
