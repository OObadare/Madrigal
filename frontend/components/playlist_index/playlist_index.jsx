import React from 'react';

class PlaylistIndex extends React.Component {

  constructor (props) {
    super(props);
    this.showAllPlaylists = this.showAllPlaylists.bind(this);
  }

  componentWillMount() {
    this.props.getAllPlaylists();
  }

  showAllPlaylists() {
    const playlists = this.props.playlists.playlists;
    if (Object.keys(this.props.playlists)[0]) {
      return Object.keys(playlists).map((key) =>{
        return (
            <div id="playlist-info-holder" key={key}>
              <div id="playlist-title-div">
                {playlists[key].title}
              </div>
              <img id="album-art" src={playlists[key].art}></img>
            </div>
        );
      });
    } else {
      return null;
    }
  }



  render () {

    return (
      <div>
        <div> This is the playlist index component! </div>
        <div id="all-playlist-holder">
          {this.showAllPlaylists()}
        </div>
      </div>
    );
  }

}

export default PlaylistIndex;
