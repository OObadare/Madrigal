import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import ModalContainer from './modal/modal_container.js';
import UserContainer from './user/user_container.js';
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
      <h1>Madrigal</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      <Route path="/user/:id" component={UserContainer} />
    </Switch>
  </div>
);

export default App;
