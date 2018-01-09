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
      <div>
        <section className="userInfo">
          <img id="userAvatar" />
          <div>
            <div id="userDetails">
              <span id="username">
                {this.props.users.user.username}
              </span>
              <span id="followercount"></span>
            </div>
          </div>
        </section>
        <section className="userTabs">
          <button id="playlistcontent" className="tabtoggle">Playlists</button>
          <button id="likecontent" className="tabtoggle">Likes</button>
        </section>
      </div>
    );
  }


}

export default User;
