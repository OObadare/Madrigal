import React from 'react';
import { Link } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor (props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(e) {
    this.props.show(<SessionFormContainer formType={e.currentTarget.id}/>);
  }

  render() {
    if (!this.props.currentUser) {
      return (
        <div className="login-signup">
          <button onClick={this.handleModal} id="loginpath"> Log in</button>
          &nbsp;
          <button onClick={this.handleModal} id="signuppath"> Sign Up</button>
        </div>
      );
    } else {
      return (
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </hgroup>
      )
    }
  }
}
//
//
//
// const sessionLinks = (show) => (
//   <nav className="login-signup">
//     <button onClick={show} id="loginpath"> Log in</button>
//     &nbsp;
//     <button onClick={show} id="signuppath"> Sign Up</button>
//   </nav>
// );
//
// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );
//
// const Greeting = ({ currentUser, logout, show }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks(show)
// );


export default Greeting;
