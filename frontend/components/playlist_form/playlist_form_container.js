import { connect } from 'react-redux';
import { createPlaylist, getPlaylist } from '../../actions/modal_actions';
import PlaylistForm from './playlist_form';

const mapStateToProps = (state) => {
  return {
    playlist: state.playlist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    getPlaylist: id => dispatch(getPlaylist(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
