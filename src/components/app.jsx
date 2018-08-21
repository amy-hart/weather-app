import React from 'react';
import axios from 'axios';


import LocationDetails from '../components/location-details';
import ForecastSummaries from '../components/forecast-summaries';
import ForecastDetails from '../components/forecast-details';

import '../styles/app.scss';
import '../styles/forecast-summaries.scss';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      location: {
        city: '',
        country: '',
      },
      selectedDate: 0,
      forecasts: [],
    };

    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }
  
  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect}/>
        {
        selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      
        {
          //selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester').then(res => {
      const forecasts = res.data.forecasts;
      const location = res.data.location;
      this.setState({
        forecasts: forecasts,
        location: location,
      });
    });
  }
}

export default App;
