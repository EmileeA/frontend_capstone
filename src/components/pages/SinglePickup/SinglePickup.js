import React from 'react';
import { Link } from 'react-router-dom';
import pickupData from '../../../helpers/data/pickupData';

import './SinglePickup.scss';

class SinglePickup extends React.Component {
  state = {
    pickup: {},
  };

  componentDidMount() {
    const { pickupId } = this.props.match.params;

    pickupData
      .getSinglePickup(pickupId)
      .then((response) => {
        this.setState({ pickup: response.data });
      })
      .catch((error) => console.error('error from single pickup', error));
  }

  deletePickupEvent = (e) => {
    e.preventDefault();
    const { pickupId } = this.props.match.params;
    pickupData
      .deletePickup(pickupId)
      .then(() => this.props.history.push('/myaccount'))
      .catch((error) => console.error('error from single pickups', error));
  };

  render() {
    const { pickup } = this.state;
    const { pickupId } = this.props.match.params;
    return (
      <div className="SinglePickup container">
        <div className="d-flex justify-content-center">
          <Link className="btn btn-dark m-2" to={`/myaccount/${pickupId}/edit`}>
            Edit
          </Link>
          <button className="btn btn-dark m-2" onClick={this.deletePickupEvent}>
            Delete
          </button>
        </div>
        <img
          className="w-50"
          id="pickupImg"
          src={pickup.image}
          alt={pickup.name}
        />
        <div className="singlep">
        <p>{pickup.name}</p>
        <p>{pickup.address}</p>
        <p>{pickup.pickupDay}</p>
        <p>{pickup.boxNumber}</p>
      </div>
      </div>
    );
  }
}

export default SinglePickup;
