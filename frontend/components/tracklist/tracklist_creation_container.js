import TracklistCreation from './tracklist_creation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTracklist, getTracklists, createTracklist } from '../../actions/tracklist_actions';
import { getIds } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    track: state.tracks.track,
    tracks: state.tracks.tracks,
    tracklists: state.tracklists,
    trackId: state.ids.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTracklist: (tracklistId) => dispatch(getTracklist(tracklistId)),
    getTracklists: () => dispatch(getTracklists()),
    createTracklist: (track) => dispatch(createTracklist(track))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(TracklistCreation));
