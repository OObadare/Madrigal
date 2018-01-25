import User from './user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../actions/user_actions';
import { getUserPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: state.playlists,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser:(userId) => dispatch(getUser(userId)),
    getUserPlaylists:(userId) => dispatch(getUserPlaylists(userId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(User));
