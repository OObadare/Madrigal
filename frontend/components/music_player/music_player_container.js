import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MusicPlayer from './music_player';

const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPlayer));
