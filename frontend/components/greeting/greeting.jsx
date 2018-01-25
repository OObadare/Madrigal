import React from 'react';
import { Link } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      errors: this.props.errors.session,
      prevComponent: ""
    };
    this.handleModal = this.handleModal.bind(this);
    this.changeHistory = this.changeHistory.bind(this);
  }
  handleModal(e) {
    this.props.show(<SessionFormContainer formType={e.currentTarget.id}/>);
    this.setState({
      prevComponent: e.currentTarget.id
    });
  }

  userLink() {
    this.props.getUser(this.props.currentUser);
  }

  changeHistory() {
    this.props.history.push('/');
  }

  // //componentDidUpdate isn't working, work on this later
  // componentWillUpdate() {
  //   if ((this.state.errors !== null) && (!this.props.currentUser)) {
  //     this.props.show(<SessionFormContainer formType={this.state.prevComponent}/>);
  //   }
  // }

  render() {
    if (!this.props.currentUser) {
      return (
        <div id="GreetingHolder">
          <span id="Homelink" onClick={this.changeHistory}>Madrigal</span>
          <div className="login-signup">
            <button onClick={this.handleModal} id="loginpath"> Log in</button>
            &nbsp;
            <button onClick={this.handleModal} id="signuppath"> Sign Up</button>
          </div>
        </div>
      );
    } else {
      return (
        <div id="GreetingHolder" >
          <span id="Homelink" onClick={this.changeHistory}>Madrigal</span>
          <Link to={`/playlists/new`}>
            <button type="button" id="newmixbtn"> New Mix </button>
          </Link>
          <div className="dropdown">
            <button className="dropbtn" />
            <div className="dropcontent">
              <Link to={`/playlists/new`}>New Mix</Link>
              <br></br>
              <span></span>
              <Link to={`/users/${this.props.currentUser.id}`} >{this.props.currentUser.username}</Link>
              <br></br>
              <div className="header-button" onClick={this.props.logout}>Log Out</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Greeting;
