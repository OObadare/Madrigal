import React from 'react';
import ReactDOM from 'react-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: "",
      tracks: [],
      playidx: "",
      playlist: ""
    };
    this.handleLoad = this.handleLoad.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  componentWillUpdate() {
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
    const trackkeys = Object.keys(this.props.tracks);
    this.setState({playlist: this.props.playlist, tracks: this.props.tracks, playing: this.props.tracks[trackkeys[0]], playidx: 0}, function(){
      this.refs.audio.pause();
      this.refs.audio.load();
      this.refs.audio.play();
    });

  }

  render() {
    if (this.state.playing) {
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
          <audio id="PlaylistPlayer" ref ="audio" key={this.state.playing.id} controls="controls" controlsList="nodownload" autoPlay onEnded={this.handleEnd} >
            <source src={this.state.playing.song} type="audio/mpeg" />
          </audio>
        </section>
      );
    } else {
      return (null);
    }
  }

}

export default MusicPlayer;
