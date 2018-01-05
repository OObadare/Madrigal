import React from 'react';

class Modal extends React.Component {
  render() {
    if(!this.props.component) {
      return null;
    }

    return (
      <div id="backdrop" onClick={this.props.hideModal}>
        <div id="modal" onClick={(e) => e.stopPropagation()}>
          {this.props.component}
          <div className="footer">
            <button onClick={this.props.hideModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
