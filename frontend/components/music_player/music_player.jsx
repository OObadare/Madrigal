import React from 'react';
import ReactDOM from 'react-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: "",
      tracks: [],
      playidx: ""
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
    this.setState({tracks: this.props.tracks, playing: this.props.tracks[trackkeys[0]], playidx: 0}, function(){
      this.refs.audio.pause();
      this.refs.audio.load();
      this.refs.audio.play();
    });

  }

  render() {
    if (this.state.playing) {
      return (
        <section id="MusicPlayerHolder">
          <audio id="PlaylistPlayer" ref ="audio" key={this.state.playing.id} controls="controls" controlsList="nodownload" autoPlay onEnded={this.handleEnd} >
            <source src={this.state.playing.song} type="audio/mpeg" />
          </audio>
          <div id="currentTrackInfo">
            {this.state.playing.title}
          </div>
        </section>
      );
    } else {
      return (null);
    }
  }

}

export default MusicPlayer;
