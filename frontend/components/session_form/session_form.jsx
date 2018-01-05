import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      type: this.props.formType
    };
    this.emailInput = this.emailInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    debugger
    e.preventDefault();
    const user = this.state;
    if (this.state.type === "signuppath") {
      this.props.signup(user);
    } else {
      this.props.login(user);
    }
  }

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }

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
    if (this.state.type === "signuppath") {
      return (
        <label>Email:
          <input type="email"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </label>
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
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            {this.emailInput()}
            <br/>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
