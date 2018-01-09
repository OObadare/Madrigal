import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
    this.getUser = this.props.getUser.bind(this);
  }

  componentDidMount() {
    this.props.getUser(parseInt(this.props.match.params.id));
    this.setState({
      user: this.props.users.user
    });
  }


  render() {
    return (
      <section className="userInfo">
        <img id="userAvatar" />
        <div>
          <div id="userDetails">
            {this.props.users.user.username}
            <span id="username"> </span>
            <span id="followercount"></span>
          </div>
        </div>

      </section>
    );
  }


}

export default User;
