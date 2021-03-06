import React from 'react';

class TracklistCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.currentUser.id,
      trackIds: [],
      tracks: ''
    };

  this.idsToTracks = this.idsToTracks.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  }

  componentDidMount() {
    this.setState({
      tracks: this.props.tracks
    });
  }

  componentWillUnmount() {
    if ((this.props.playlists.playlist) && (JSON.stringify(this.props.playlists) !== JSON.stringify({}))) {
      const playlist_id = this.props.playlists.playlist.id;
      this.state.trackIds.map((track_id) => {
        let tracklist = {track_id, playlist_id};
        this.props.createTracklist(tracklist);
      });
      //map over the trackId array, calling createTracklist on each of them.
      //call the create tracklist action (on backend, set the playlist id to Playlist.last)
      //setting the playlist_id to the play
    }
  }

  componentWillReceiveProps(newProps) {
    if (JSON.stringify(newProps.trackId) !== JSON.stringify(this.props.trackId)){
      this.setState({
        trackIds: this.state.trackIds.concat(newProps.trackId)
      });
    }

  }

  idsToTracks() {
    const that = this;
    return this.state.trackIds.map((key) =>{
      if (that.props.tracks[key]) {
        const tracknum = that.state.trackIds.findIndex((element) => {
          return element == key;
        }) + 1;
        return (
          <div id="tracklist-info-holder" key={key}>
            <span id = "tracknumber">
              {tracknum}
            </span>
            <div id="tracklist-div" key={key}>
              <div id="title-div">
                {that.props.tracks[key].title} <span id="artist-span">{that.props.tracks[key].artist}</span>
              </div>
              <div id="album-div">
                Album: <span id="album-span"> {that.props.tracks[key].album} </span>
              </div>
            </div>
            <span id="remove-button-div" onClick={(e) => this.removeTrack(key, e)}></span>
          </div>
        );
      }
    });
  }

  removeTrack(id, e) {
    const removeIndex = this.state.trackIds.indexOf(id);
    var dupTracks = this.state.trackIds;
    dupTracks.splice(removeIndex, 1);
    this.setState({
      trackIds: dupTracks
    });
  }


  render() {
    return (
      <div id="tracklist-base-div">
        {this.idsToTracks()}
      </div>
    );
  }

}

export default TracklistCreation;
