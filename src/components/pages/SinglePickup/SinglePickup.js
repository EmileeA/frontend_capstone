import React from 'react';
import './SinglePickup.scss';

class SinglePickup extends React.Component {
  render() {
    const { edit } = this.props.match.params;
    return (
      <div className="SinglePickup">
    { edit === 'edit' ? (<h1>Edit</h1>) : (<h1>Single Pickup</h1>) }
      </div>
    );
  }
}

export default SinglePickup;
