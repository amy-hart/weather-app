import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';

const ForecastSummaries = props => (
  
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <p key={forecast.date} potato={props.potato}>
          {forecast.date}
          {
            forecast.desc
          }
        </p>
      ))
    }
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
  onForecastSelect: PropTypes.func,
};

ForecastSummaries.defaultProps = {
  forecasts: 'forecasts array goes here',
};


export default ForecastSummaries;

  //console.log('Forecasts array: ',props.forecasts[0]),
      //console.log('1st forecast date: ', props.forecasts[0].date),
      //console.log('1st forecast temp: ', props.forecasts[0].temperature),
      //console.log('1st forecast temp max: ', props.forecasts[0].temperature.max),
      //console.log('1st forecast temp min: ', props.forecasts[0].temperature.min),
      //console.log('1st forecast wind: ', props.forecasts[0].wind)

        //<ForecastSummary
         // key={forecast.date}
          //date={forecast.date}
          //description={forecast.description}
          //icon={forecast.icon}
          //temperature={forecast.temperature}
          //onSelect={props.onForecastSelect}
        ///>

        /*
           <ForecastSummary key={forecast.date} potato={props.potato}>
          
        </ForecastSummary>
        
        */