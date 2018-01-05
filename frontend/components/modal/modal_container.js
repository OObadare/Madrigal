import LoginModal from './login_modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModal, hideModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    component: state.modals.component,
    visible: Boolean(state.modals.component)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hide: () => dispatch(hideModal())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal));
