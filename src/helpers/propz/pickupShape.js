import PropTypes from 'prop-types';

const pickupShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.string,
  boxNumber: PropTypes.string,
  pickupDay: PropTypes.string,
  uid: PropTypes.string,
});

export default { pickupShape };
