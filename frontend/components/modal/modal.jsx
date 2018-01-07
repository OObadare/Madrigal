import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentChecker() {
    if (this.props.errors){
      //then this.props.component is the previous component
    } else if (!this.props.component) {
      //render null
    } else {
      //render the login and signup buttons
    }
  }

  render() {
    if(!this.props.component) {
      return null;
    }

    return (
      <div id="backdrop" onClick={this.props.hideModal}>
        <div id="modal" onClick={(e) => e.stopPropagation()}>
          <button onClick={this.props.hideModal}>
          </button>
          <div id="loginimage"></div>
          {this.props.component}
          <div className="footer">
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
