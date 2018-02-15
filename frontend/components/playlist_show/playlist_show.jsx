import React from 'react';
// import MusicPlayer from '../music_player.jsx'

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: this.props.playlist
    };
    this.giveInfo = this.giveInfo.bind(this);
    this.playlistStats = this.playlistStats.bind(this);
    this.listTracks = this.listTracks.bind(this);
    this.showLike = this.showLike.bind(this);
    this.makeLike = this.makeLike.bind(this);
    this.destroyLike = this.destroyLike.bind(this);
  }

  componentDidMount() {
    this.props.getPlaylist(parseInt(this.props.match.params.id));
    this.props.getPlaylistTracks(parseInt(this.props.match.params.id));
    this.props.getPlaylistLikes(parseInt(this.props.match.params.id));
  }

  listTracks() {
    if (this.props.tracks.tracks !== undefined){
      const trackKeys = Object.keys(this.props.tracks.tracks);
      return trackKeys.map((idx) => {
        return(
          <div id="listTrack-div" key={idx}>
            <div id="listTrack-title-div">
              {this.props.tracks.tracks[idx].artist} - <span id="listTrack-artist-span">{this.props.tracks.tracks[idx].title}</span>
            </div>
            <div id="listTrack-album-div">
              Album: <span id="listTrack-album-span"> {this.props.tracks.tracks[idx].album} </span>
            </div>
          </div>
        );
      });
    } else {
      return (null);
    }
  }

  makeLike() {
    this.props.createLike(this.props.currentUser.id, this.props.playlist.id);
  }

  destroyLike() {
    const curr = this.props.currentUser;
    const likeArr = Object.values(this.props.likes);
    const found = likeArr.find((like) => {
      return like.user_id === curr.id;
    });
    this.props.deleteLike(found.id, this.props.playlist.id);
  }

  playlistStats() {
    if (this.props.tracks.tracks !== undefined){
      const trackNum = Object.keys(this.props.tracks.tracks).length;
      if (typeof this.props.likes !== "undefined"){
        const likeNum = Object.keys(this.props.likes).length;
        return (
          <div> {trackNum} tracks | {likeNum} likes</div>
        );
      } else {
        return (
          <div> {trackNum} tracks | 0 likes</div>
        );
      }
    }
  }

  showLike() {

    if (this.props.currentUser) {
      const curr = this.props.currentUser;
      if (typeof this.props.likes !== "undefined"){
        const likeArr = Object.values(this.props.likes);
        const found = likeArr.find((like) => {
          return like.user_id === curr.id;
        });
        if (typeof found === "undefined" ) {
          return (
            <object id="likebutton" data="https://i.imgur.com/3AN2eMU.png" onClick={this.makeLike}>
            </object>
          );
        } else {
          return (
            <object id ="unlikebutton" data="https://i.imgur.com/6htu2hL.png" onClick={this.destroyLike}></object>
          );
        }
      } else {
      }
    }
  }

  giveInfo() {
    if (this.props.playlist) {
      return (
        <section id="playlistInfoHolder">
          <div id="imgContainer">
            <img id="playlistArt" src={this.props.playlist.art} ></img>
            <div id="overlay" onClick={this.props.loadNow}></div>
          </div>
          <div id="playlistText">
            {this.props.playlist.title} {this.showLike()}
            <br></br>
            <div id="playlistDescriptionHolder"> Notes: <br></br> {this.props.playlist.description}</div>
            <div id="playlistStatsHolder"> {this.playlistStats()}

            </div>
            {this.listTracks()}
          </div>
          <div>
          </div>
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
