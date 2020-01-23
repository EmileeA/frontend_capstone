import React from 'react';
import { Link } from 'react-router-dom';
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
    const { pickupId } = this.props.match.params;
    return (
     <div className="SinglePickup container">
        <h1>{pickup.name}</h1>
        <div className="d-flex justify-content-center">
        <Link className="btn btn-dark m-2" to={`/stuff/${pickupId}/edit`}>Edit</Link>
        </div>
        <img className="w-50" src={pickup.image} alt={pickup.name} />
        <h4>{pickup.boxNumber}</h4>
      </div>
    );
  }
}

export default SinglePickup;
