import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllPlaylists, getPlaylist } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: state.playlists,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPlaylists: () => dispatch(getAllPlaylists()),
    getPlaylist: (id) => dispatch(getPlaylist(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex));
