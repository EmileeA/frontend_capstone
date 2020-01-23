import React from 'react';
import './Stuff.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import pickupShape from '../../../helpers/propz/pickupShape';

class Stuff extends React.Component {
  static propTypes = {
    pickup: pickupShape.pickupShape,
    deletePickup: PropTypes.func,
  }

  deletePickupEvent = (e) => {
    e.preventDefault();
    const { deletePickup, pickup } = this.props;
    deletePickup(pickup.id);
  }

  render() {
    const { pickup } = this.props;

    return (
    <div className="Stuff col-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <button className="btn btn-danger ml-auto close" onClick={this.deletePickupEvent}>x</button>
            <h5 className="card-title">{pickup.name}</h5>
            <img className="card-img" src={pickup.image} alt={pickup.address} />
          </div>
          <div className="card-footer">
            <Link className="btn btn-dark m-2" to={`/myaccount/${pickup.id}`}>View</Link>
            <Link className="btn btn-dark m-2" to={`/myaccount/${pickup.id}/edit`}>Edit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Stuff;
