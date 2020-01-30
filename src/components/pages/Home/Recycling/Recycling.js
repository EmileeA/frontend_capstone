/* eslint-disable max-len */
import React from 'react';
import './Recycling.scss';

class Recycling extends React.Component {
  render() {
    return (
      <div className="Recycling container-fluid">
        <div className="row rrow text-center">
        <div className="recyclingh1 col-12">
          <h1>Recycling Tips</h1>
          </div>
          <div className="recyclinginnerText col-12">
            <p>Looking for help on how to recycle in your city?</p>
            <p>
              We’ve compiled some tips for how to best wherever you’re located.
            </p>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          <div class="card col-4">
            <img
              class="card-img-top" id="recycleimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/woman-reading-label.jpg"
              alt="Recycled Materials"
            ></img>
            <div class="card-body">
              <h4>Use products made from recycled materials</h4>
              <p class="card-text">
                Now days there are many manufactures that focus on selling
                products made strictly from recycled materials. Many grocers
                have eco-friendly products on their shelves that use packaging
                made from 100% recycled paper or plastic. Eco-friendly products
                help reduce the amount of plastic pollution. Did you know that
                only 27% of plastic bottles are recycled. The rest sit in
                landfills where they can take up to 1,000 years to decompose.
              </p>
            </div>
          </div>

          <div class="card col-4">
            <img
              class="card-img-top" id="recycleimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/christiann-koepke-r6rokVkrwZk-unsplash.jpg"
              alt="Pickup"
            ></img>
            <div class="card-body">
              <h4>Buy products that can be recycled</h4>
              <p class="card-text">
                Buying recycled products is an important step in completing the
                life-cycle of a recycled item and “closing the loop” on the
                recycling process. By purchasing products with recycled content
                you prevent those materials from ending up in a landfill and do
                your part to maintain consumer demand for recyclables and ensure
                the continuation of recycling programs
              </p>
            </div>
          </div>

          <div class="card col-4">
            <img
              class="card-img-top" id="recycleimg"
              src="https://raw.githubusercontent.com/EmileeA/frontend_capstone/master/screenshots/family-recycling.jpg"
              alt="Can/Can't Be Recycled"
            ></img>
            <div class="card-body">
              <h4>Know what can and can't be recycled</h4>
              <p class="card-text">
                If you really want to commit to recycling and wonder what else
                you can do, use this site to find out!
                https://www.ohswa.org/amirecyclable
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recycling;
