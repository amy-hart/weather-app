import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = props => (
  <div className="forecast-summary forecast-details">
    <div className="date">
      <span>{moment(props.forecast.date).format('ddd Do MMM')}</span>
    </div>
    <div className="maxTemperature">
      <span>Max: {props.forecast.temperature.max}&#8451;</span>
      <span>Min: {props.forecast.temperature.min}&#8451;</span>
    </div>
    <div className="humidity">
      <span>Humidity: {props.forecast.humidity}%</span>
    </div>
    <div className="wind">
      <span>Wind: {props.forecast.wind.speed}mph {props.forecast.wind.direction}</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  minTemperature: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
};

ForecastDetails.defaultProps = {
  date: 1543622400,
  temperature: 21,
  minTemperature: 4,
  humidity: 70,
  windSpeed: 55,
  windDirection: 'nw',
};

export default ForecastDetails;
