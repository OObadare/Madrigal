import { connect } from 'react-redux';
import { showModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  show: (component) => dispatch(showModal(component))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
