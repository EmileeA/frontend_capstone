/* eslint-disable max-len */
import React from 'react';
import './Testimonials.scss';

class Testimonials extends React.Component {
  render() {
    return (
      <div id="testimonials container-fluid">
        <div className="row trow text-center">
        <div className="testimonialsh1 col-12">
          <h1>Testimonials</h1>
          </div>
          <div className="testimonialsinnerText col-12">
            <p>
              See why many customers prefer curbside recycling over recycle drop
              off centers.
            </p>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          <div class="card col-4">
            <img
              class="card-img-top" id="testimonialsimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/nonsap-visuals-kMJp7620W6U-unsplash.jpg"
              alt="Box"
            ></img>
            <div class="card-body">
              <h4>Sullivan Harris</h4>
              <p class="card-text">
                Reebox is super convenient. I used to have to take all my
                recycling to the Nashville public works bins. But now I can just
                leave it outside my door. I hate how apartment complexes refuse
                to have recycling bins, so reebox is a great way to still
                recycle, and be super convenient.
              </p>
            </div>
          </div>

          <div class="card col-4">
            <img
              class="card-img-top" id="testimonialsimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/jessica-rockowitz-E4USFFAc_9A-unsplash.jpg"
              alt="Sullivan"
            ></img>
            <div class="card-body">
              <h4>Jackson Family</h4>
              <p class="card-text">
                Reebox is the best. They offer an extremely needed service, are
                priced fairly and convenient. They aren't perfect and have some
                bugs -as every growing company does- but they are always
                helpful, responsive, and willing to correct them. I honestly
                love their service so much!
              </p>
            </div>
          </div>

          <div class="card col-4">
            <img
              class="card-img-top" id="testimonialsimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/humphrey-muleba-Cc-CQTUkbH0-unsplash.jpg"
              alt="Wesley"
            ></img>
            <div class="card-body">
              <h4>Wesley and Ossie</h4>
              <p class="card-text">
                I love having this service! I have had curbside pickup weekly
                for 7 months. They have never missed a pick-up! It is affordable
                and has reduced my household landfill trash by two thirds.
                Looking forward to having glass added!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
