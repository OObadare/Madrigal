import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    hideModal: () => dispatch(hideModal()),
    show: (component) => dispatch(showModal(component))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
