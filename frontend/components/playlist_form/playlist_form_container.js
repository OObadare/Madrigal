import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createPlaylist, getPlaylist } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';
import {createTracklist, receiveTracklist } from '../../actions/tracklist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.playlist,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    getPlaylist: (id) => dispatch(getPlaylist(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm));
