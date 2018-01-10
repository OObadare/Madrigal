import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class PlaylistForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: ``,
      description: ``,
      artFile: ``,
      artUrl: ``
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    var formData = new FormData();
    formData.append("playlist[art_file_name]", this.state.artFile);
    formData.append("playlist[title]", this.state.title);
    formData.append("playlist[description]", this.state.description);
    formData.append("playlist[user_id]", this.props.currentUser.id);
    this.props.createPlaylist(formData);
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
        <form className="playlist-form-box">
          Upload your tracks and cover art!
          <br/>
          Then enter a title and description.
          <br/>
          <div className="playlist-info-form">
            <br/>
              <input id = "title-input" type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="playlist-input"
                placeholder="Title"
              />
            <br/>
              <input id="description" type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="playlist-input"
                placeholder="Description"
              />
            <br/>
            <input id="art" type="file" onChange={this.updateFile} className="playlist-input" />
            <br/>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </div>
        </form>
        <div id="swapcontainer">
          <img src={this.state.artUrl}></img>
        </div>
      </div>
    );
  }
}

export default PlaylistForm;
