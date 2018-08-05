import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = props => <h1>{`${props.city}, ${props.country}`}</h1>;

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

LocationDetails.defaultProps = {
  city: 'Name of city',
  country: 'Name of country',
};

export default LocationDetails;
