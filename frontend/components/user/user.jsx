import React from 'react';
import PlaylistIndexContainer from '../playlist_index/playlist_index_container';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      userLikes: "",
      userPlaylists: ""
    };
    this.getUser = this.props.getUser.bind(this);
    this.openPlaylists = this.openPlaylists.bind(this);
    this.playlistCount = this.playlistCount.bind(this);
    this.swapLike = this.swapLike.bind(this);
    this.likeCount = this.likeCount.bind(this);
  }

  componentDidMount() {
    this.props.getUser(parseInt(this.props.match.params.id));
    this.props.getLikedNum(parseInt(this.props.match.params.id));
    this.props.getPlaylistNum(parseInt(this.props.match.params.id));
    this.setState({
      user: this.props.users.user,
      userPlaylists: this.props.playlists.playlists
    });
  }

  componentWillMount() {
    this.props.getUserPlaylists(parseInt(this.props.match.params.id));
  }

  swapLike() {
    this.props.getLikedPlaylists(parseInt(this.props.match.params.id));
  }

  playlistCount() {
    if (this.props.userPlaylists) {
      return Object.keys(this.props.userPlaylists).length;
    } else {
      return "0 :(";
    }
  }

  likeCount() {
    if (this.props.userLikes) {
      return Object.keys(this.props.userLikes).length;
    } else {
      return "0 :(";
    }
  }

  openPlaylists(e) {
    //if this.props.match.params.id (gives a string of the user param e.g. "5")
    //then I want to filter the shown playlists by that user_id, while if it's likes
    //I want to get the liked playlists from that user.
    if (e.currentTarget.id === "playlistcontent") {
      this.props.getUserPlaylists(parseInt(this.props.match.params.id));
    } else if (e.currentTarget.id === "likecontent") {
      this.props.getLikedPlaylists(parseInt(this.props.match.params.id));
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
                <span id="followcount"> {this.likeCount()} </span>
              </div>
              <div id="follow-text">
                <span id="followed"> Playlists </span>
                <span id="followers"> Likes </span>
              </div>
            </div>
          </div>
        </section>
        <section className="userTabs">
          <button id="playlistcontent" onClick={this.openPlaylists} className="tabtoggle">PLAYLISTS</button>
          <button id="likecontent" onClick={this.openPlaylists} className="tabtoggle">LIKES</button>
        </section>
        <section className="PlaylistIndex">
          <PlaylistIndexContainer />
        </section>
      </div>
    );
  }


}

export default User;
