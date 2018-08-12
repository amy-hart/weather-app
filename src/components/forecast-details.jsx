import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = props => (
  <div className="forecast-summary">
    <div className="date">
      <span>{moment(props.date).format('ddd do MMM')}</span>
    </div>
    <div className="maxTemperature">
      <span>{props.temperature}&#8451;</span><br />
      <span>{props.minTemperature}&#8451;</span>
    </div>
    <div className="humidity">
      <span>{props.humidity}%</span>
    </div>
    <div className="wind">
        <span>{props.windSpeed}mph {props.windDirection}</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  minTemperature: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired,
};

ForecastDetails.defaultProps = {
  date: 1525132800000,
  temperature: 21,
  minTemperature: 4,
  humidity: 70,
  windSpeed: 55,
  windDirection: 'nw',
};

export default ForecastDetails;
