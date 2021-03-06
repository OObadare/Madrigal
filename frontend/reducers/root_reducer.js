
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import modals from './modal_reducer';
import users from "./user_reducer";
import playlists from "./playlist_reducer";
import tracks from "./track_reducer";
import tracklists from "./tracklist_reducer";
import ids from "./id_reducer";
import audio from "./audio_reducer";
import likes from "./like_reducer";
import nums from "./number_reducer";
// import nowPlaying from "./now_playing_reducer";

const rootReducer = combineReducers({
  session,
  modals,
  errors,
  users,
  playlists,
  tracks,
  tracklists,
  ids,
  audio,
  likes,
  nums
  // nowPlaying
});

export default rootReducer;
