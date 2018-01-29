import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MusicPlayer from './music_player';
import { getPlaylistTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.playlists.playlist,
  tracks: state.tracks.tracks
});

const mapDispatchToProps = dispatch => ({
  getPlaylistTracks: (id) => dispatch(getPlaylistTracks(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPlayer));
