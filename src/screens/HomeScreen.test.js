// @flow
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen navigation={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const navigateMock = jest.fn();
    const component = shallow(<HomeScreen navigation={{ navigate: navigateMock }} />);


    // Call onPressMeal
    component.find('MealList').prop('onPressMeal')();
    expect(navigateMock).toHaveBeenCalled();
  });
});
