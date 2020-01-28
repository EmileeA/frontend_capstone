/* eslint-disable max-len */
import React from 'react';
import './Features.scss';

class Features extends React.Component {
  render() {
    return (
      <div className="Features container-fluid">
        <div className="row" id="frow">
          <div className="col">
            <div className="featuresh1Id ">
              <h1>Convenient. Affordable. Simple</h1>
              <div className="featuresinnerText">
              <p>
                Here at ReeBox we understand that although it’s important to
                recycle, there are more important things to worry about. It’s
                our job to make recycling as easy and accessible as possible so
                you can have more time for what matters most. We pride ourselves
                in convenient, reliable, and affordable services with minimal
                effort on your part.
              </p>
              </div>
            </div>
          </div>
         <div className="row">
          <div className="col-4 featuresCol">
            <div className="fblurb-top">
              <div className="fblurb-content">
                <div className="fblurb-image">
                  <span className="fimage-wrap">
                    <img
                      src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/box.png"
                      alt="fblurb Img"
                      id="fblurbImgId1"
                    />
                  </span>
                  <div className="fblurb-container-header">
                    <h4>Boxes</h4>
                  </div>
                  <div className="fblurb-description">
                    <p>No need to break down boxes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 featuresCol" id="features">
            <div className="fblurb-top">
              <div className="fblurb-content">
                <div className="fblurb-image">
                  <span className="fimage-wrap">
                    <img
                      src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/truckman.png"
                      alt="fblurb Img"
                      id="fblurbImgId1"
                    />
                  </span>
                  <div className="fblurb-container-header">
                    <h4>Place them on the curb</h4>
                  </div>
                  <div className="fblurb-description">
                    <p>Put your boxes out on your recycling pick-up day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 featuresCol">
            <div className="fblurb-top">
              <div className="fblurb-content">
                <div className="fblurb-image">
                  <span className="fimage-wrap">
                    <img
                      src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/recyclecardboard.png"
                      alt="fblurb Img"
                      id="fblurbImgId1"
                    />
                  </span>
                  <div className="fblurb-container-header">
                    <h4>We'll do the rest</h4>
                  </div>
                  <div className="fblurb-description">
                    <p>
                      We'll be by on your recycling day, and if you ever need
                      additional pick-ups, just let us know!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}

export default Features;
