import React from 'react';
import Enzyme from 'enzyme';
import WeatherIcon from 'react-icons-weather';
import ForecastSummary from '../../forecast-summary';

it('renders one forecast summary with date, temp, description, and icon', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary
      date={1525046400000}
      temperature={21}
      description="mockDescription"
      icon="800"
    />
  ));
  expect(wrapper.find('.forecast-summary .date').text()).toEqual('Mon 1st Apr');
  expect(wrapper.find('.forecast-summary .temperature').text()).toEqual('21℃');
  expect(wrapper.find('.forecast-summary .description').text()).toEqual('mockDescription');
  expect(wrapper.find(WeatherIcon).prop('iconId')).toEqual('800');
});
