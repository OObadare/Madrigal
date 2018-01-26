import PlaylistShow from "./playlist_show";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPlaylist } from '../../actions/playlist_actions';
import { getPlaylistTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.playlists.playlist,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPlaylistTracks:(id) => dispatch(getPlaylistTracks(id)),
    getPlaylist:(id) => dispatch(getPlaylist(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(PlaylistShow));
