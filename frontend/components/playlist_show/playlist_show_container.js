import PlaylistShow from "./playlist_show";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPlaylist, createLike } from '../../actions/playlist_actions';
import { getPlaylistTracks, loadNow, unload } from '../../actions/track_actions';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.playlists.playlist,
    users: state.users,
    tracks: state.tracks,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPlaylistTracks:(id) => dispatch(getPlaylistTracks(id)),
    getPlaylist:(id) => dispatch(getPlaylist(id)),
    loadNow: () => dispatch(loadNow()),
    unload: () => dispatch(unload()),
    getUser: (id) => dispatch(getUser(id)),
    createLike: (user_id, playlist_id) => dispatch(createLike(user_id, playlist_id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(PlaylistShow));
