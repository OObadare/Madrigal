import React from 'react';

class TracklistCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id
    };
  }

  render() {
    return (
      <div id="tracklist-base-div">
        This is the tracklist Creation Component!
      </div>
    );
  }

}

export default TracklistCreation;
