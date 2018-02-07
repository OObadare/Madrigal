import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class PlaylistIndex extends React.Component {

  constructor (props) {
    super(props);
    if (this.props.user != null){
      this.state = {
        user: this.props.user.username
      };
    }
    this.showAllPlaylists = this.showAllPlaylists.bind(this);
  }

  componentWillMount() {
    if (this.props.history.location.pathname === "/"){
      this.props.getAllPlaylists();
    }
  }

  showAllPlaylists() {
    const playlists = this.props.playlists.playlists;
    if ((playlists) && (Object.keys(this.props.playlists)[0])) {
      return Object.keys(playlists).map((key) =>{
        return (
            <Link to={`/playlists/${key}`} id="playlist-info-holder" key={key}>
              <div id="playlist-title-div">
                {playlists[key].title}
              </div>
              <img id="album-art" playlistid={key} src={playlists[key].art}></img>
            </Link>
        );
      });
    } else {
      return null;
    }
  }


  render () {
    if (this.props.currentUser){
      return (
        <div>
          <div> Hello, {this.props.currentUser.username}! </div>
          <div id="all-playlist-holder">
            {this.showAllPlaylists()}
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <div id="all-playlist-holder">
            {this.showAllPlaylists()}
          </div>
        </div>
      );
    }
  }

}

export default PlaylistIndex;
