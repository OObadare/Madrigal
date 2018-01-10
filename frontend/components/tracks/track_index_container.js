import TrackIndex from './track_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTrack, getTracks, createTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    track: state.track,
    tracks: state.tracks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTrack: (trackId) => dispatch(getTrack(trackId)),
    getTracks: () => dispatch(getTracks()),
    createTrack: (track) => dispatch(createTrack(track))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(TrackIndex));
