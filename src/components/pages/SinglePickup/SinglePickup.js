import React from 'react';
import pickupData from '../../../helpers/data/pickupData';

import './SinglePickup.scss';

class SinglePickup extends React.Component {
  state = {
    pickup: {},
  }

  componentDidMount() {
    const { pickupId } = this.props.match.params;

    pickupData.getSinglePickup(pickupId)
      .then((response) => {
        this.setState({ pickup: response.data });
      })
      .catch((error) => console.error('error from single pickup', error));
  }

  render() {
    const { pickup } = this.state;
    return (
    //   <div className="SinglePickup">
    // { edit === 'edit' ? (<h1>Edit</h1>) : (<h1>Single Pickup</h1>) }
    <div className="SinglePickup container">
        <h1>{pickup.name}</h1>
        <img className="w-50" src={pickup.image} alt={pickup.name} />
        <h4>{pickup.boxNumber}</h4>
      </div>
    );
  }
}

export default SinglePickup;
