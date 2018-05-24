import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from "react-responsive-audio-player";

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: "",
      tracks: [],
      playidx: "",
      playlist: "",
      formattedPlaylist: []
    };
    this.handleLoad = this.handleLoad.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.load) {
      this.props.unload();
      this.handleLoad();
    }
  }

  handleEnd(e) {
    e.preventDefault;
    const trackkeys = Object.keys(this.props.tracks);
    const currIdx = this.state.playidx;
    if (trackkeys[currIdx + 1] !== null) {
        this.setState({playing: this.state.tracks[trackkeys[currIdx + 1]], playidx: currIdx + 1 });
    } else {
      this.setstate({playing: "", playidx: ""});
    }
  }

  handleLoad(e) {
    // e.preventDefault;
    //can't access element by trying to hit the zeroth index
    var playlistArr = [];
    const trackkeys = Object.keys(this.props.tracks);
    trackkeys.forEach((key) => {
      var newTrack = {url: this.props.tracks[key].song, title:this.props.tracks[key].title, artist:this.props.tracks[key].artist, album: this.props.tracks[key].album};
      playlistArr.push(newTrack);
    });
    this.setState({playlist: this.props.playlist, tracks: this.props.tracks, playing: this.props.tracks[trackkeys[0]], playidx: 0, formattedPlaylist: playlistArr}, function(){
      // this.refs.audio.pause();
      // this.refs.audio.load();
      // this.refs.audio.play();
    });

  }

  render() {
    if (this.state.formattedPlaylist.length > 0) {
      return (
        <section id="MusicPlayerHolder">
          <span id="currentTrackInfo">
            <img id="thumbnail" src={this.state.playlist.art}></img>
            <span id="TrackTitleAlbumArtist">
              <ul id="infolist">
                <li>Title: {this.state.playing.title}</li>
                <li>Artist: {this.state.playing.artist}</li>
                <li>Album: {this.state.playing.album}</li>
              </ul>
            </span>
          </span>
          <AudioPlayer id="PlaylistPlayer" playlist={this.state.formattedPlaylist} autoPlay="true" >

          </AudioPlayer>
        </section>
      );
    } else {
      return (null);
    }
  }

}

export default MusicPlayer;
