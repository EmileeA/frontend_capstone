
/* eslint-disable max-len */
import React from 'react';
import './Features.scss';

class Features extends React.Component {
  render() {
    return (
      <div className="Features container-fluid">
        <div className="row frow text-center">
          <div className="featuresh1">
          <h1>Convenient. Reliable. Affordable</h1>
          </div>
          <div className="featuresinnerText">
            <p>
              Here at ReeBox we understand that although it’s important to
              recycle, there are more important things to worry about. It’s our
              job to make recycling as easy and accessible as possible so you
              can have more time for what matters most. We pride ourselves in
              convenient, reliable, and affordable services with minimal effort
              on your part.
            </p>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          <div class="card col-4">
            <img
              class="card-img-top" id="featuresimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/box.png"
              alt="Box"
            ></img>
            <div class="card-body">
              <h4>Boxes</h4>
              <p class="card-text">No need to break down boxes, our compactor will do that!</p>
            </div>
          </div>

          <div class="card col-4">
            <img
              class="card-img-top" id="featuresimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/truckman.png"
              alt="Pickup"
            ></img>
            <div class="card-body">
              <h4>Place them on the curb</h4>
              <p class="card-text">
                Put your boxes out on your recycling pick-up day
              </p>
            </div>
          </div>

          <div class="card col-4">
            <img
              class="card-img-top" id="featuresimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/recyclecardboard.png"
              alt="Recycle"
            ></img>
            <div class="card-body">
              <h4>We'll do the rest</h4>
              <p class="card-text">
                We'll be by on your recycling day, and if you ever need
                additional pick-ups, just let us know!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
