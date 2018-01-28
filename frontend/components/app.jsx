import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import ModalContainer from './modal/modal_container.js';
import UserContainer from './user/user_container.js';
import PlaylistFormContainer from './playlist_form/playlist_form_container';
import PlaylistIndexContainer from './playlist_index/playlist_index_container';
import PlaylistShowContainer from './playlist_show/playlist_show_container';
import MusicPlayerContainer from './music_player/music_player_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div>
    <ModalContainer />
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/users/:id" component={UserContainer} />
      <Route path="/playlists/new" component={PlaylistFormContainer} />
      <Route path="/playlists/:id" component={PlaylistShowContainer} />
      <Route path="/" component={PlaylistIndexContainer} />
    </Switch>
    <div className="SoundPlayerHolder">
      <MusicPlayerContainer />
    </div>
  </div>
);

export default App;
