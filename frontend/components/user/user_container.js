import User from './user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: (userId) => dispatch(getUser(userId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(User));
