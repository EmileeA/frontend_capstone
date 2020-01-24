import React from 'react';
import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import pickupData from '../../../helpers/data/pickupData';
import Stuff from '../../shared/Stuff/Stuff';


import './MyPickups.scss';

class MyPickups extends React.Component {
  state ={
    stuff: [],
  }

  deletePickup = (pickupId) => {
    pickupData.deletePickup(pickupId)
      .then(() => this.getStuff())
      .catch((error) => console.error('error from deletePickup', error));
  }

  getStuff = () => {
    pickupData.getPickupsByUid(authData.getUid())
      .then((stuff) => this.setState({ stuff }))
      .catch((error) => console.error('error from my stuff', error));
  }

  componentDidMount() {
    this.getStuff();
  }

  render() {
    return (
      <div className="MyPickups">
        <div className="MyAccount" id="MyAccounth1">
        <h1>My Account</h1>
        </div>
        <div className="stuff container d-flex flex-wrap">
          {this.state.stuff.map((pickup) => <Stuff key={pickup.id} deletePickup={this.deletePickup} pickup={pickup} />)}
        </div>
      <div>
      <Link to="/scheduleapickup">
     <button button className="btn btn-dark" id="schedulebtn">
     Schedule a Pickup
     </button>
 </Link>
      </div>
      </div>
    );
  }
}

export default MyPickups;
