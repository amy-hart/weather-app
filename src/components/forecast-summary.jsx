import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="date">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="temperature">
      <span>{props.temperature}&#8451;</span>
    </div>
    <div className="description">
      <span>{props.description}</span>
    </div>
    <div className="icon">
      <div className="forecast-summary__icon">
        <WeatherIcon name="owm" iconId={props.icon} />
      </div>
    </div>
    <div className="view-more-button">
      <button type="button" onClick={() => props.onSelect(props.date)}>More Details</button>
    </div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  city: PropTypes.string,
  onSelect: PropTypes.func,
};

ForecastSummary.defaultProps = {
  date: 18031991,
  temperature: 21,
  description: 'Description',
  icon: 'Icon800',
};

export default ForecastSummary;
