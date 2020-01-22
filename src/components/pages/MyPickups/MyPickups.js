import React from 'react';
// import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import pickupData from '../../../helpers/data/pickupData';
import Stuff from '../../shared/Stuff/Stuff';


import './MyPickups.scss';

class MyPickups extends React.Component {
  state ={
    stuff: [],
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
        <h1>My Account</h1>
        {/* <Link className="btn btn-primary" to={`/myaccount/${pickupId}`}>View</Link>
        <Link className="btn btn-secondary" to={`/myaccount/${pickupId}/edit`}>Edit</Link> */}
        <div className="stuff container d-flex flex-wrap">
          {this.state.stuff.map((pickup) => <Stuff key={pickup.id} pickup={pickup} />)}
        </div>
      </div>
    );
  }
}

export default MyPickups;
