import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: this.props.playlist
    };
    this.giveInfo = this.giveInfo.bind(this);
  }
  //playlist ID: this.props.match.params.id

  componentDidMount() {
    this.props.getPlaylist(parseInt(this.props.match.params.id));
  }

  giveInfo() {
    if (this.props.playlist) {
      return (
        <section id="playlistInfoHolder">
          <img id="playlistArt" src={this.props.playlist.art}></img>
          <div id="playlistTitle">{this.props.playlist.title}</div>

        </section>
      );
    }
  }


  render() {
    return (
      <section id="playlistShowHolder">
        {this.giveInfo()}
        <section id="trackInfoHolder">
        </section>
      </section>
    );

  }
}

export default PlaylistShow;
