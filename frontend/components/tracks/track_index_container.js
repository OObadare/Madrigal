import TrackIndex from './track_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTrack, getTracks, createTrack } from '../../actions/track_actions';
import { receiveId } from "../../actions/tracklist_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    track: state.track,
    tracks: state.tracks,
    ids: state.ids,
    id: state.tracks.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveId: (id) => dispatch(receiveId(id)),
    receiveIds: () => dispatch(receiveId()),
    getTrack: (trackId) => dispatch(getTrack(trackId)),
    getTracks: () => dispatch(getTracks()),
    createTrack: (track) => dispatch(createTrack(track))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(TrackIndex));
