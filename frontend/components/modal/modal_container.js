import LoginModal from './login_modal';

import { connect } from 'react-redux';


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
  mapStatetoProps,
  mapDispatchToProps
)(LoginModal));
