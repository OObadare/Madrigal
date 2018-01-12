import React from 'react';
import TracklistCreationContainer from "../tracklist/tracklist_creation_container";

class TrackIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trackFile: '',
      trackUrl: '',
      title: '',
      artist: '',
      album: '',
      tracks: ''
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAllTracks = this.showAllTracks.bind(this);
    this.parentTracklists = this.parentTracklists.bind(this);
    this.handleId = this.handleId.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (JSON.stringify(newProps.tracks) !== JSON.stringify(this.props.tracks)){
      this.setState({
        tracks: this.props.getTracks()
      });
    }

  }

  componentWillMount() {
    this.setState({
      tracks: this.props.getTracks()
    });
  }


  parentTracklists(tracklists) {
    //stuff
  }

  handleId(trackID, e){
    this.props.receiveId(trackID);
  }

  setAudio(track, e){
    this.props.receiveTrack(track);
  }

  playAudio() {
    <audio controls="controls">
      <source src={tracks[key].song_file_name} type="audio/mpeg" />
    </audio>
  }


  showAllTracks() {
    const tracks = this.props.tracks.tracks;
    if (Object.keys(this.props.tracks)[0]) {
      return Object.keys(tracks).map((key) =>{
        return (
          <div id="track-div" key={key}>
            <div id="title-div">
              {tracks[key].title} <span id="artist-span">{tracks[key].artist}</span>
            </div>
            <div id="album-div">
              Album: <span id="album-span"> {tracks[key].album} </span>
            </div>
            <button id="add-track-to-tracklist" onClick={(e) => this.handleId(tracks[key].id, e)} />
            <button id="play-track" onClick={(e) => this.setAudio(tracks[key], e)} />
          </div>
        );
      });
    } else {
      return null;
    }
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append("track[song_file_name]", this.state.trackFile);
    formData.append("track[title]", this.state.title);
    formData.append("track[artist]", this.state.artist);
    formData.append("track[album]", this.state.album);
    this.props.createTrack(formData);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({trackFile: file, trackUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const tracks =this.showAllTracks();
    return (
      <span>
        <h2 id="crate-head">My Crate</h2>
        <div id="track-index-holder">
          <TracklistCreationContainer parentTracklists="{this.parentTracklists}"/>
          <div id="upload-tracks">
            <input id = "song-title-input" type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="song-input"
              placeholder="Song Title"
              />
            <br></br>
            <input id = "album-input" type="text"
              value={this.state.album}
              onChange={this.update('album')}
              className="song-input"
              placeholder="Album"
              />
            <br></br>
            <input id = "artist-input" type="text"
              value={this.state.artist}
              onChange={this.update('artist')}
              className="song-input"
              placeholder="Artist"
              />
            <br></br>
            <input id="song" type="file" onChange={this.updateFile} className="new-song" />
            <label htmlFor="song">Choose a music file!</label>
            <br></br>
            <input id="submit" type="submit" value="Add Track to library!" onClick={this.handleSubmit}/>
          </div>
          <div id="track-index">
            {tracks}
          </div>
        </div>
      </span>
    );
  }
}

export default TrackIndex;
