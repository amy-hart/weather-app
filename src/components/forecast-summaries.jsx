import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
        />
      ))
    }
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
};

ForecastSummaries.defaultProps = {
  forecasts: 'forecasts array goes here',
};


export default ForecastSummaries;
