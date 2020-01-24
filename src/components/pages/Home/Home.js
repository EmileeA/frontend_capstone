/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import authData from '../../../helpers/data/authData';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
      <div className="homeh1" id="homeh1Id">
      <h1>Reduce. Reuse. Reebox</h1>
      </div>
      <div className="homeImg">
      <img src="https://images.unsplash.com/photo-1508767279710-1445ad3b14d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2026&q=80" alt="Home Img" id="homeImgId" />
      </div>
      </div>
    );
  }
}

export default Home;
