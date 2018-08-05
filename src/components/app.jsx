import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from '../components/location-details';

const App = props => (
  <LocationDetails
    city={props.location.city}
    country={props.location.country}
  />
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
