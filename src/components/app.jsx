import React from 'react';
import PropTypes from 'prop-types';

import LocationDetails from '../components/location-details';
import ForecastSummaries from '../components/forecast-summaries';
import ForecastDetails from '../components/forecast-details';

import '../styles/app.scss';
import '../styles/forecast-summaries.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };

    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const selectedForecast = this.props.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.props.location.city}
          country={this.props.location.country}
        />
        <ForecastSummaries forecasts={this.props.forecasts} onForecastSelect={this.handleForecastSelect} />
        <ForecastDetails forecast={selectedForecast} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
