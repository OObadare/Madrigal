import User from './user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../actions/user_actions';
import { getUserPlaylists } from '../../actions/playlist_actions';
import { getLikedPlaylists, getLikedNum, getPlaylistNum} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: state.playlists,
    users: state.users,
    currentUser: state.session.currentUser,
    userPlaylists: state.nums.playlists,
    userLikes: state.nums.likes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser:(userId) => dispatch(getUser(userId)),
    getUserPlaylists:(userId) => dispatch(getUserPlaylists(userId)),
    getLikedPlaylists:(userId) => dispatch(getLikedPlaylists(userId)),
    getLikedNum:(userId) => dispatch(getLikedNum(userId)),
    getPlaylistNum:(userId) => dispatch(getPlaylistNum(userId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(User));
