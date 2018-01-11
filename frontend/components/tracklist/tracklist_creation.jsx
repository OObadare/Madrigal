import React from 'react';

class TracklistCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.currentUser.id,
      trackIds: [],
      tracks: ''
    };

  // this.showTracklists = this.showTrackLists.bind(this);
  this.idsToTracks = this.idsToTracks.bind(this);
  }

  componentDidMount() {
    this.setState({
      tracks: this.props.tracks
    });
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
        return (
          <div id="tracklist-div">
            <div id="title-div">
              {that.props.tracks[key].title} <span id="artist-span">{that.props.tracks[key].artist}</span>
          </div>
          <div id="album-div">
            Album: <span id="album-span"> {that.props.tracks[key].album} </span>
        </div>
      </div>
    );
      }
    });
  }

  // // showTracklists() {
  //   const tracklists = this.props.tracklists;
  //   // filter tracklists by the playlist_id?
  //   //get the tracks where the tracklist_id is equal to the track id
  //   if (Object.keys(this.props.trackslists)[0]) {
  //     return Object.keys(tracklists).map((key) =>{
  //       return (
  //         <div id="tracklist-div">
  //           <div id="title-div">
  //             {tracklists[key].title} <span id="artist-span">{tracklists[key].artist}</span>
  //           </div>
  //           <div id="album-div">
  //             Album: <span id="album-span"> {tracklists=s[key].album} </span>
  //           </div>
  //         </div>
  //       );
  //     });
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    // tracklist = this.showTracklists();
    return (
      <div id="tracklist-base-div">
        Stuff should be here
        {this.idsToTracks()}
      </div>
    );
  }

}

export default TracklistCreation;
