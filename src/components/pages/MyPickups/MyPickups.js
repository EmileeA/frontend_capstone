import React from 'react';
import { Link } from 'react-router-dom';
import './MyPickups.scss';

class MyPickups extends React.Component {
  render() {
    const pickupId = '12345';
    return (
      <div className="MyPickups">
        <h1>My Account</h1>
        <Link className="btn btn-primary" to={`/myaccount/${pickupId}`}>View</Link>
        <Link className="btn btn-secondary" to={`/myaccount/${pickupId}/edit`}>Edit</Link>
      </div>
    );
  }
}

export default MyPickups;
