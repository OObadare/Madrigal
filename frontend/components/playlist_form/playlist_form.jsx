import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TrackIndexContainer from "../tracks/track_index_container";

class PlaylistForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ``,
      user_id: ``,
      description: ``,
      artFile: ``,
      artUrl: ``
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("playlist[art_file_name]", this.state.artFile);
    formData.append("playlist[title]", this.state.title);
    formData.append("playlist[description]", this.state.description);
    formData.append("playlist[user_id]", this.props.currentUser.id);
    this.props.createPlaylist(formData)
      .then(
        success => this.props.history.push(`/users/${this.props.currentUser.id}`)
      );
  }

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({artFile: file, artUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="playlist-form-container">
        <h1>Upload your tracks and cover art! Then enter a title and description.</h1>
        <form className="playlist-form-box">
          <div className="artcontainer">
            <object type="image/jpg" data={this.state.artUrl}/>
          </div>
          <div className="playlist-info-form">
            <br/>
              <input id = "title-input" type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="playlist-input"
                placeholder="Untitled Mix"
              />
            <br/>
              <input id="description" type="textarea"
                wrap="soft"
                rows="20"
                cols="70"
                value={this.state.description}
                onChange={this.update('description')}
                className="playlist-input"
                placeholder="Enter your description here!"
              />
            <br/>
            <input id="art" type="file" onChange={this.updateFile} className="playlist-input" />
            <label htmlFor="art">Choose a file</label>
            <br/>
            <input id="submit" type="submit" value="Publish" onClick={this.handleSubmit}/>
          </div>
        </form>
        <TrackIndexContainer />
      </div>
    );
  }
}

export default PlaylistForm;
