/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import Features from './Features/Features';
import Testimonials from './Testimonials/Testimonials';
import Recycling from './Recycling/Recycling';

class Home extends React.Component {
  componentDidMount() {
    if (this.props.history.location.hash !== '') {
      const { hash } = this.props.history.location;
      const element = document.getElementById(hash.replace('#', ''));
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <div className="Home container-fluid">
        <div className="row">
          <div className="homeImg">
            <img src="https://images.unsplash.com/photo-1508767279710-1445ad3b14d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2026&q=80" alt="Home Img" id="homeImgId" />
          </div>
        </div>
        <div className="row">
          <div className="col homeh1" id="homeh1Id">
          <h1>Reduce. Reuse. Reebox</h1>
          </div>
        </div>
        <div className="row" id="features">
          <Features/>
        </div>
        <div className="row" id="recycling">
          <Recycling/>
        </div>
        <div className="row" id="testimonials">
          <Testimonials/>
        </div>
      </div>
    );
  }
}

export default Home;
