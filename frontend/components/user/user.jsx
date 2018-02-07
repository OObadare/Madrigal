import React from 'react';
import PlaylistIndexContainer from '../playlist_index/playlist_index_container';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
    this.getUser = this.props.getUser.bind(this);
    this.openPlaylists = this.openPlaylists.bind(this);
    this.playlistCount = this.playlistCount.bind(this);
  }

  componentDidMount() {
    this.props.getUser(parseInt(this.props.match.params.id));
    this.setState({
      user: this.props.users.user
    });
  }

  componentWillMount() {
    this.props.getUserPlaylists(parseInt(this.props.match.params.id));
  }

  playlistCount() {
    if (this.props.playlists.playlists) {
      return Object.keys(this.props.playlists.playlists).length;
    } else {
      return "0 :(";
    }
  }

  openPlaylists(component) {
    //if this.props.match.params.id (gives a string of the user param e.g. "5")
    //then I want to filter the shown playlists by that user_id, while if it's likes
    //I want to get the liked playlists from that user.
    if (component === "user") {

    } else if (component === "likes") {

    }

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
              <div id="count">
                <span id="followedcount"> {this.playlistCount()} </span>
                <span id="followcount"> 0 </span>
              </div>
              <div id="follow-text">
                <span id="followed"> Playlists </span>
                <span id="followers"> Followers </span>
              </div>
            </div>
          </div>
        </section>
        <section className="userTabs">
          <button id="playlistcontent" onClick={this.openPlaylists("user")} className="tabtoggle">PLAYLISTS</button>
          <button id="likecontent" onClick={this.openPlaylists("likes")} className="tabtoggle">LIKES</button>
        </section>
        <section className="PlaylistIndex">
          <PlaylistIndexContainer />
        </section>
      </div>
    );
  }


}

export default User;
