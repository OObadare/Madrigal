import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as SessionActions from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.login = SessionActions.login;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
