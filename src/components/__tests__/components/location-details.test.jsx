import React from 'react';
import Enzyme from 'enzyme';
import LocationDetails from '../../location-details';

it('renders the passed city and country in a h1 tag', () => {
  const wrapper = Enzyme.shallow((
    <LocationDetails city="Manchester" country="UK" />
  ));

  const text = wrapper.find('h1').text();

  expect(text).toEqual('Manchester, UK');
});
