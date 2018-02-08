import React from 'react';
// import MusicPlayer from '../music_player.jsx'

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: this.props.playlist
    };
    this.giveInfo = this.giveInfo.bind(this);
    this.listTracks = this.listTracks.bind(this);
    this.showLike = this.showLike.bind(this);
    this.makeLike = this.makeLike.bind(this);
  }

  componentDidMount() {
    this.props.getPlaylist(parseInt(this.props.match.params.id));
    this.props.getPlaylistTracks(parseInt(this.props.match.params.id));
  }

  listTracks() {
    if (this.props.tracks.tracks !== undefined){
      const trackKeys = Object.keys(this.props.tracks.tracks);
      return trackKeys.map((idx) => {
        return(
          <div id="listTrack-div" key={idx}>
            <div id="listTrack-title-div">
              {this.props.tracks.tracks[idx].artist} - <span id="listTrack-artist-span">{this.props.tracks.tracks[idx].title}</span>
            </div>
            <div id="listTrack-album-div">
              Album: <span id="listTrack-album-span"> {this.props.tracks.tracks[idx].album} </span>
            </div>
          </div>
        );
      });
    } else {
      return (null);
    }
  }

  makeLike() {
    this.props.createLike(this.props.currentUser.id, this.props.playlist.id);
  }

  showLike() {
    if (this.props.currentUser) {
      return (
        <button onClick={this.makeLike}> CLICK THIS TO LIKE</button>
      );
    }
  }

  giveInfo() {
    if (this.props.playlist) {
      return (
        <section id="playlistInfoHolder">
          <div id="imgContainer">
            <img id="playlistArt" src={this.props.playlist.art} ></img>
            <div id="overlay" onClick={this.props.loadNow}></div>
          </div>
          <div id="playlistText">
            {this.props.playlist.title}
            <br></br>
            <div id="playlistDescriptionHolder"> Notes: <br></br> {this.props.playlist.description}</div>
            {this.listTracks()}
          </div>
          <div>
            {this.showLike()}
          </div>
        </section>
      );
    }
  }


  render() {
    return (
      <section id="playlistShowHolder">
        {this.giveInfo()}
        <section id="trackInfoHolder">
        </section>
      </section>
    );

  }
}

export default PlaylistShow;
