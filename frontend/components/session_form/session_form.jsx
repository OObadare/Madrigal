import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.swapModal = this.swapModal.bind(this);
    this.emailInput = this.emailInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logsignswap = this.swapLogSign.bind(this);
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.formType === "signuppath") {
      this.props.signup(user).then(this.props.hideModal);
    } else {
      this.props.login(user).then(this.props.hideModal);
    }
  }

  swapLogSign() {
    if (this.props.formType === "signuppath") {
      return (
          <div className="swaplogsign" onClick={this.swapModal}>
            Already have an account? Sign in instead!
          </div>
      )
    } else {
      return (
        <div className="swaplogsign" onClick={this.swapModal}>
          Don't have an account? Sign up instead!
        </div>
      )
    }
  }


  swapModal(e) {
    e.preventDefault();
    if (this.props.formType ==="loginpath"){
      this.props.show(<SessionFormContainer formType="signuppath"/>);
    } else {
      this.props.show(<SessionFormContainer formType="loginpath"/>);
    }
  }

  renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
  }

  emailInput () {
    if (this.props.formType === "signuppath") {
      return (
          <input id="emailinput" type="email"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Email"
          />
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box">
          Welcome to Madrigal!
          <br/>
          We're happy to have you!
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input id = "usernameinput" type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            <br/>
              <input id="passwordinput" type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            <br/>
            {this.emailInput()}
            <br/>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </div>
        </form>
        <div id="swapcontainer">
          {this.swapLogSign()}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
