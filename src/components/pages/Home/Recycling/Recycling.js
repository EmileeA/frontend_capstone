import React from 'react';
import './Recycling.scss';

class Recycling extends React.Component {
  render() {
    return (
      <div className="Recycling container-fluid">
        <div className="row">
          <div className="col">
            <div className="recyclingh1Id">
              <h1>Recycling Tips</h1>
              <div className="recyclinginnerText">
              <p>Looking for help on how to recycle in your city?</p>
              <p>
                We’ve compiled some tips for how to best wherever you’re
                located.
              </p>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 recycleCol">
              <div className="rblurb-top">
                <div className="rblurb-content">
                  <div className="rblurb-image">
                    <span className="rimage-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/cristian-palmer-1DmGYtJYyuI-unsplash.jpg"
                        alt="blurb Img"
                        id="rblurbImgId1"
                      />
                    </span>
                    <div className="rblurb-container-header">
                      <h4>Boxes</h4>
                    </div>
                    <div className="rblurb-description">
                      <p>No need to break down boxes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 recycleCol">
              <div className="rblurb-top">
                <div className="rblurb-content">
                  <div className="rblurb-image">
                    <span className="rimage-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/casey-horner-4rDCa5hBlCs-unsplash.jpg"
                        alt="blurb Img"
                        id="rblurbImgId1"
                      />
                    </span>
                    <div className="rblurb-container-header">
                      <h4>Place them on the curb</h4>
                    </div>
                    <div className="rblurb-description d-flex">
                      <p>Put your boxes out on your recycling pick-up day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 recycleCol">
              <div className="rblurb-top">
                <div className="rblurb-content">
                  <div className="rblurb-image">
                    <span className="rimage-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/cristian-palmer-1DmGYtJYyuI-unsplash.jpg"
                        alt="blurb Img"
                        id="rblurbImgId1"
                      />
                    </span>
                    <div className="rblurb-container-header">
                      <h4>We'll do the rest</h4>
                    </div>
                    <div className="rblurb-description">
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

export default Recycling;
