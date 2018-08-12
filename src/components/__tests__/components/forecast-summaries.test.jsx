import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummaries from '../../forecast-summaries';
import ForecastSummary from '../../forecast-summary';

it('Create new summary component for each forecast', () => {
  const forecasts = [
    {
      date: 123,
      description: 'desc1',
      icon: 'icon1',
      temperature: {
        max: 999,
      },
    },
    {
      date: 456,
      description: 'desc2',
      icon: 'icon2',
      temperature: {
        max: 777,
      },
    },
  ];

  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));

  expect(wrapper.find(ForecastSummary).length).toEqual(2);
});

it('Passed correct values to each ForecastSummary', () => {
  const forecasts = [
    {
      date: 1525046400000,
      description: 'desc1',
      icon: 'icon1',
      temperature: {
        max: 999,
      },
    },
    {
      date: 1525132800000,
      description: 'desc2',
      icon: 'icon2',
      temperature: {
        max: 777,
      },
    },
  ];
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));
  wrapper.find(ForecastSummary).forEach((node, index) => {
    expect(node.prop('date')).toEqual(forecasts[index].date);
    expect(node.prop('description')).toEqual(forecasts[index].description);
    expect(node.prop('icon')).toEqual(forecasts[index].icon);
    expect(node.prop('temperature')).toEqual(forecasts[index].temperature.max);
  });
});
