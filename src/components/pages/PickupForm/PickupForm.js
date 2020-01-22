import React from 'react';

import './PickupForm.scss';
import authData from '../../../helpers/data/authData';
import pickupData from '../../../helpers/data/pickupData';

class PickupForm extends React.Component {
  state = {
    name: '',
    address: '',
    boxNumber: '',
    pickupDay: '',
  }

nameChange = (e) => {
  e.preventDefault();
  this.setState({ name: e.target.value });
}

addressChange = (e) => {
  e.preventDefault();
  this.setState({ address: e.target.value });
}

boxNumberChange = (e) => {
  e.preventDefault();
  this.setState({ boxNumber: e.target.value });
}

pickupDayChange = (e) => {
  e.preventDefault();
  this.setState({ pickupDay: e.target.value });
}

savePickupEvent = (e) => {
  e.preventDefault();
  const newPickup = {
    name: this.state.name,
    address: this.state.address,
    boxNumber: this.state.boxNumber,
    pickupDay: this.state.pickupDay,
    uid: authData.getUid(),
  };
  pickupData.savePickup(newPickup)
    .then(() => this.props.history.push('/pickups'))
    .catch((error) => console.error('err from save pickup event', error));
}

render() {
  const {
    name, address, boxNumber, pickupDay,
  } = this.state;

  return (
    <div className="PickupForm">
      <form className="PickupForm">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control col-4 m-auto"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={this.nameChange}
          >
        </input>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control col-4 m-auto"
          id="address"
          placeholder="Enter Address"
          value={address}
          onChange={this.addressChange}
          >
          </input>
        <label htmlFor="boxNumber">Number of Boxes</label>
        <input
          type="text"
          className="form-control col-4 m-auto"
          id="boxNumber"
          placeholder="Enter Number of Boxes"
          value={boxNumber}
          onChange={this.boxNumberChange}
          >
          </input>
          <label htmlFor="pickupDay">Pickup Day</label>
        <input
          type="text"
          className="form-control col-4 m-auto"
          id="pickupDay"
          placeholder="Enter Pickup Day"
          value={pickupDay}
          onChange={this.pickupDayChange}
          >
          </input>
      </div>
      <button className="btn btn-dark" onClick={this.savePickupEvent}>Save Pickup</button>
    </form>
    </div>
  );
}
}

export default PickupForm;
