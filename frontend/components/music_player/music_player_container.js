import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MusicPlayer from './music_player';
import { getPlaylistTracks, unload } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.playlists.playlist,
  tracks: state.tracks.tracks,
  load: state.tracks.load
});

const mapDispatchToProps = dispatch => ({
  getPlaylistTracks: (id) => dispatch(getPlaylistTracks(id)),
  unload: (id) => dispatch(unload())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPlayer));
