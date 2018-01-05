import React from 'react';

class Modal extends React.Component {
  render() {
    if(!this.props.component) {
      return null;
    }

    return (
      <div className="backdrop" onClick={this.props.hide}>
        <div className="modal" onClick={(e) => e.stopPropogation()}>
          {this.props.component}
          <div className="footer">
            <button onClick={this.props.hide}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
