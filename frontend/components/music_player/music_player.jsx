import React from 'react';
import ReactDOM from 'react-dom';
import { PlayButton, Timer, VolumeControl } from 'react-soundplayer/components';
import PropTypes from 'prop-types';
// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';


// audio source
// const streamUrl = 'https://s3-eu-west-1.amazonaws.com/react-soundplayer-examples/ksmtk-reborn-edit.mp3';

// some track meta information
const trackTitle = 'Ksmtk - Reborn';

const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle } = props;
  return (
    <div>
      <PlayButton {...props} />
      <h2>{trackTitle}</h2>
      <Timer {...props} />
    </div>
  );
});

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.generateTrackList = this.generateTrackList.bind(this);
  }

  generateTrackList() {

    if (this.props.tracks.tracks){
      const trackKeys = Object.keys(this.props.tracks.tracks);
      return trackKeys.map((key) => {
        return (this.props.tracks.tracks[key].song);
      }, this);
    }
  }

  render() {
    const TrackUrls = this.generateTrackList();
    debugger
    if (typeof TrackUrls !== "undefined"){
      return (
        <AWSSoundPlayer
          streamUrl={TrackUrls[0]}
          trackTitle={trackTitle}
          preloadType="auto" />
      );
    } else {
      return (null);
    }
  }
}

export default MusicPlayer;
