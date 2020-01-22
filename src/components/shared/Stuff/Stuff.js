import React from 'react';
import './Stuff.scss';
import { Link } from 'react-router-dom';

import pickupShape from '../../../helpers/propz/pickupShape';

class Stuff extends React.Component {
  static propTypes = {
    pickup: pickupShape.pickupShape,
  }

  render() {
    const { pickup } = this.props;

    return (
    <div className="Stuff col-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{pickup.name}</h5>
            <img className="card-img" src={pickup.image} alt={pickup.address} />
          </div>
          <div className="card-footer">
            <Link className="btn btn-dark" to={`/myaccount/${pickup.id}`}>View</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Stuff;
