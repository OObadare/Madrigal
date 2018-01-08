import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    return this.setState({
      user: this.props.getUser(this.props.match.params.id)
    });
  }

  render() {
    return (
      <section className="userInfo">
        <img id="userAvatar" />
        <div>
          <div id="userDetails">
            Details here
            <span id="username"> </span>
            <span id="followercount"></span>
          </div>
        </div>

      </section>
    );
  }


}

export default User;
