import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <div className="forecast-summary">
    Potato: {props.potato}
    <div className="date">
     {props.date}
    </div>
    <div className="temperature">
      max temp
    </div>
    <div className="description">
      description
    </div>
    <div className="icon">
      <div className="forecast-summary__icon">
        icon
      </div>
    </div>
    <div className="view-more-button">
      button
    </div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  city: PropTypes.string,
  onSelect: PropTypes.func,
};

ForecastSummary.defaultProps = {
  date: 18031991,
  temperature: {
    max: 21,
    min: 13
  },
  description: 'Description',
  icon: 'Icon800',
};

export default ForecastSummary;

/*
<div className="date">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="temperature">
   
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
   
    </div>


*/