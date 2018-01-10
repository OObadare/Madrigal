import React from 'react';

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
  }

  componentDidMount() {
    this.setState({
      tracks: this.props.getTracks()
    });
  }

  // componentDidUpdate() {
  //   this.setState({
  //     tracks: this.props.getTracks
  //   });
  // }

  // showAllTracks() {
  //   tracks.forEach
  //
  //   );
  // }

  handleSubmit(e) {
    var formData = new FormData();
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
    return (
      <span>
        <h2>upload and select your tracks here!</h2>
        <div id="track-index-holder">
          <div>
            Tracklists will go here!
          </div>
          <div id="upload-tracks">
            <input id = "title-input" type="text"
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
          </div>
        </div>
      </span>
    );
  }
};

export default TrackIndex;
