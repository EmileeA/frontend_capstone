import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './PickupForm.scss';
import authData from '../../../helpers/data/authData';
import pickupData from '../../../helpers/data/pickupData';

class PickupForm extends React.Component {
  state = {
    name: '',
    address: '',
    boxNumber: '',
    pickupDay: '',
  };

  componentDidMount() {
    const { pickupId } = this.props.match.params;
    if (pickupId) {
      pickupData
        .getSinglePickup(pickupId)
        .then((response) => {
          this.setState({
            name: response.data.name,
            address: response.data.address,
            boxNumber: response.data.boxNumber,
            pickupDay: response.data.pickupDay,
          });
        })
        .catch((error) => console.error('error from component did mount', error));
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  addressChange = (e) => {
    e.preventDefault();
    this.setState({ address: e.target.value });
  };

  boxNumberChange = (e) => {
    e.preventDefault();
    this.setState({ boxNumber: e.target.value });
  };

  pickupDayChange = (e) => {
    e.preventDefault();
    this.setState({ pickupDay: e.target.value });
  };

  savePickupEvent = (e) => {
    e.preventDefault();
    const newPickup = {
      name: this.state.name,
      address: this.state.address,
      image:
        'https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/RecycleTruckIcon.png',
      boxNumber: this.state.boxNumber,
      pickupDay: this.state.pickupDay,
      uid: authData.getUid(),
    };
    pickupData
      .savePickup(newPickup)
      .then(() => this.props.history.push('/myaccount'))
      .catch((error) => console.error('err from save pickup event', error));
  };

  saveChangesEvent = (e) => {
    e.preventDefault();
    const { pickupId } = this.props.match.params;
    const updatedPickup = {
      name: this.state.name,
      address: this.state.address,
      image:
        'https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/RecycleTruckIcon.png',
      boxNumber: this.state.boxNumber,
      pickupDay: this.state.pickupDay,
      uid: authData.getUid(),
    };
    pickupData
      .updatePickup(pickupId, updatedPickup)
      .then(() => this.props.history.push('/myaccount'))
      .catch((error) => console.error('error from save item event', error));
  };


  render() {
    const {
      name, address, boxNumber, pickupDay,
    } = this.state;
    const { pickupId } = this.props.match.params;

    return (
      <div className="PickupForm">
        <form className="PickupForm">
          <div className="form-group">
            <div className="newPickuph1">
            <h1>Schedule a New Pickup</h1>
            </div>
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control col-4 m-auto"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={this.nameChange}
            ></input>
            <label htmlFor="address"></label>
            <input
              type="text"
              className="form-control col-4 m-auto"
              id="address"
              placeholder="Enter Address"
              value={address}
              onChange={this.addressChange}
            ></input>
            <label htmlFor="boxNumber"></label>
            <input
              type="text"
              className="form-control col-4 m-auto"
              id="boxNumber"
              placeholder="Enter Number of Boxes"
              value={boxNumber}
              onChange={this.boxNumberChange}
            ></input>
            <label htmlFor="pickupDay"></label>
            <input
              type="text"
              className="form-control col-4 m-auto"
              id="pickupDay"
              placeholder="Enter Pickup Day"
              value={pickupDay}
              onChange={this.pickupDayChange}
            ></input>
          </div>
          {pickupId
            ? (<Link className="btn btn-dark" id="save" onClick={this.saveChangesEvent}>Save Changes</Link>)
            : (<Link className="btn btn-dark" id="save" onClick={this.savePickupEvent}>Save Pickup</Link>)
          }
        </form>
      </div>
    );
  }
}

export default withRouter(PickupForm);
