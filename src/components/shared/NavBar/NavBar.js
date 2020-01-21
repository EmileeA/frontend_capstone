import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <div className="MyNavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="/">Reebox</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse"
         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;