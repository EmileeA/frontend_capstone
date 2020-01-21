import React from 'react';
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
              <a className="nav-link" href="/">Features |</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> Recycling Tips |</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> Testimonials |</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> Schedule a Pickup |</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> My Account |</a>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-light" onClick={this.logMeOut}>Log Out</button>
            </li>
          </ul>
        );
      }
      return (<ul className="navbar-nav ml-auto"></ul>);
    };

    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="/">Reebox</a>
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
