import React from "react";
import ReactDOM from "react-dom";
import * as SessionApiUtil from "./util/session_api_util";

window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
window.signup = SessionApiUtil.signup;
document.addEventListener("DOMContentLoaded", () => {
const root = document.getElementById('root');
ReactDOM.render(<h1>Welcome to Madrigal!</h1>, root);
});
