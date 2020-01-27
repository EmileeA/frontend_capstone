import React from 'react';
import './Testimonials.scss';

class Testimonials extends React.Component {
  render() {
    return (
      <div id="testimonials" className="Testimonials container-fluid">
        <div className="row">
          <div className="col">
            <div className="testimonialsh1Id ">
              <h1>Testimonials</h1>
              <div className="recyclinginnerText">
              <p>
                See why many customers prefer curbside recycling over recycle
                drop off centers.
              </p>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 testimonialCol">
              <div className="tblurb-top">
                <div className="tblurb-content">
                  <div className="tblurb-image">
                    <span className="image-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/empty-cardboard-boxes.jpg"
                        alt="tblurb Img"
                        id="tblurbImgId1"
                      />
                    </span>
                    <div className="tblurb-container-header">
                      <h4>Boxes</h4>
                    </div>
                    <div className="tblurb-description">
                      <p>No need to break down boxes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 recycleCol">
              <div className="tblurb-top">
                <div className="tblurb-content">
                  <div className="tblurb-image">
                    <span className="image-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/empty-cardboard-boxes.jpg"
                        alt="tblurb Img"
                        id="tblurbImgId1"
                      />
                    </span>
                    <div className="tblurb-container-header">
                      <h4>Place them on the curb</h4>
                    </div>
                    <div className="tblurb-description">
                      <p>Put your boxes out on your recycling pick-up day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 testimonialCol">
              <div className="tblurb-top">
                <div className="tblurb-content">
                  <div className="tblurb-image">
                    <span className="image-wrap">
                      <img
                        src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/empty-cardboard-boxes.jpg"
                        alt="tblurb Img"
                        id="tblurbImgId1"
                      />
                    </span>
                    <div className="tblurb-container-header">
                      <h4>We'll do the rest</h4>
                    </div>
                    <div className="tblurb-description">
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

export default Testimonials;
