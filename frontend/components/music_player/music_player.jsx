import React from 'react';
import ReactDOM from 'react-dom';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

// some track meta information
const trackTitle = 'Ksmtk - Reborn';

const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle } = props;

  return (
    <div>
      <PlayButton {...this.props} />
      <h2>{trackTitle}</h2>
      <Timer {...this.props} />
    </div>
  );
});
//everything between these comments goes INSIDE the music player somehow
class MusicPlayer extends React.Component {

  //streamUrl will be the track.song
  render() {
  return (
    <AWSSoundPlayer
      streamUrl={streamUrl}
      trackTitle={trackTitle}
      preloadType="auto" />
  );
}
}

export default MusicPlayer;
