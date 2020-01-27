/* eslint-disable max-len */
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
                      <h4>Use products made from recycled materials</h4>
                    </div>
                    <div className="rblurb-description">
                      <p>Now days there are many manufactures that focus on selling products made strictly from recycled materials. Many grocers have eco-friendly products on their shelves that use packaging made from 100% recycled paper or plastic. Eco-friendly products help reduce the amount of plastic pollution. Did you know that only 27% of plastic bottles are recycled. The rest sit in landfills where they can take up to 1,000 years to decompose.</p>
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
                      <h4>Buy products that can be recycled.</h4>
                    </div>
                    <div className="rblurb-description d-flex">
                      <p>Buying recycled products is an important step in completing the life-cycle of a recycled item and “closing the loop” on the recycling process. By purchasing products with recycled content you prevent those materials from ending up in a landfill and do your part to maintain consumer demand for recyclables and ensure the continuation of recycling programs.</p>
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
                      <h4>Know what can and can't be recycled</h4>
                    </div>
                    <div className="rblurb-description">
                      <p>
                      If you really want to commit to recycling and wonder what else you can recycle, use this site to find out! https://www.ohswa.org/amirecyclable
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
