import React from 'react';
import './Recycling.scss';

class Recycling extends React.Component {
  render() {
    return (
      <div className="Recycling container-fluid" id="recyclingId">
        <div className="row">
          <div className="col">
            <div className="recyclingh1Id">
              <h1>Recycling Tips</h1>
              <p>Looking for help on how to recycle in your city?</p>
              <p>
                We’ve compiled some tips for how to best wherever you’re
                located.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 recycleCol">
              <div className="blurb-top">
                <div className="blurb-content">
                  <div className="blurb-image">
                    <span className="image-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/empty-cardboard-boxes.jpg"
                        alt="blurb Img"
                        id="blurbImgId1"
                      />
                    </span>
                    <div className="blurb-container-header">
                      <h4>Boxes</h4>
                    </div>
                    <div className="blurb-description">
                      <p>No need to break down boxes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 recycleCol">
              <div className="blurb-top">
                <div className="blurb-content">
                  <div className="blurb-image">
                    <span className="image-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/empty-cardboard-boxes.jpg"
                        alt="blurb Img"
                        id="blurbImgId1"
                      />
                    </span>
                    <div className="blurb-container-header">
                      <h4>Place them on the curb</h4>
                    </div>
                    <div className="blurb-description d-flex">
                      <p>Put your boxes out on your recycling pick-up day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 recycleCol">
              <div className="blurb-top">
                <div className="blurb-content">
                  <div className="blurb-image">
                    <span className="image-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/empty-cardboard-boxes.jpg"
                        alt="blurb Img"
                        id="blurbImgId1"
                      />
                    </span>
                    <div className="blurb-container-header">
                      <h4>We'll do the rest</h4>
                    </div>
                    <div className="blurb-description">
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
