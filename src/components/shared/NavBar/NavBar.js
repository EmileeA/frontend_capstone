/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './NavBar.scss';


class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
      <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#recycling">Recycling Tips</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#testimonials">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/scheduleapickup">Schedule a Pickup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myaccount">My Account</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-light" id="tacoBell" onClick={this.logMeOut}>Log Out</button>
            </li>
          </ul>
        );
      }
      return (<ul className="navbar-nav ml-auto"></ul>);
    };

    return (
      <div className="NavBar sticky">
        <nav className="navbar navbar-expand-lg navbar-white bg-white d-flex justify-content-between">
          <Link className="navbar-brand logo" to="/"><img src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/Reeboxlogo.png" alt="Reebox" id="logoImgId"></img></Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse"
         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { buildNavbar() }
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
