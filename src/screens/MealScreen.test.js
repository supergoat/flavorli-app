// @flow
import React from 'react';
import { View, Text } from 'react-native';
import MealScreen from './MealScreen';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const meal = {
  id: '1',
  name: 'Lasagna',
  description: 'This is the lasagna description',
  price: 12.00
}

describe('MealScreen', () => {
  it('renders correctly', () => {
    const getParamMock = jest.fn(() => meal)
    const tree = renderer.create(<MealScreen navigation={{ getParam: getParamMock }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('does not decrease the quantity if its equal to 1', () => {
    const getParamMock = jest.fn(() => meal)
    const component = shallow(<MealScreen navigation={{ getParam: getParamMock }} />)

    expect(component.state('quantity')).toEqual(1)
    // Press minus button
    component.find('FACircleButton').at(0).prop('onPress')();
    expect(component.state('quantity')).toEqual(1)
  });

  it('decreases the quantity by 1 if greater than 1', () => {
    const getParamMock = jest.fn(() => meal)
    const component = shallow(<MealScreen navigation={{ getParam: getParamMock }} />)

    // Set the state to 2
    component.setState({ quantity: 2})

    expect(component.state('quantity')).toEqual(2)
    // Press plus button
    component.find('FACircleButton').at(0).prop('onPress')();
    expect(component.state('quantity')).toEqual(1)
  });

  it('does not increases the quantity by 1 if its equal to 10', () => {
    const getParamMock = jest.fn(() => meal)
    const component = shallow(<MealScreen navigation={{ getParam: getParamMock }} />)

    // Set the state to 10
    component.setState({ quantity: 10})

    expect(component.state('quantity')).toEqual(10)
    // Press minus button
    component.find('FACircleButton').at(1).prop('onPress')();
    expect(component.state('quantity')).toEqual(10)
  });

  it('increases the quantity by 1 if its less than 10', () => {
    const getParamMock = jest.fn(() => meal)
    const component = shallow(<MealScreen navigation={{ getParam: getParamMock }} />)

    expect(component.state('quantity')).toEqual(1)
    // Press plus button
    component.find('FACircleButton').at(1).prop('onPress')();
    expect(component.state('quantity')).toEqual(2)
  });

  it('calls goBack when cancel button is pressed', () => {
    const getParamMock = jest.fn(() => meal)
    const goBackMock = jest.fn(() => meal)
    const component = shallow(
      <MealScreen
        navigation={{ getParam: getParamMock, goBack: goBackMock }}
      />
    );

    // Press cancel button
    component.find('FAButton').at(0).prop('onPress')();
    expect(goBackMock).toHaveBeenCalled();
  });

  it('calls goBack when add button is pressed', () => {
    const getParamMock = jest.fn(() => meal)
    const goBackMock = jest.fn(() => meal)
    const component = shallow(
      <MealScreen
        navigation={{ getParam: getParamMock, goBack: goBackMock }}
      />
    );

    // Press add button
    component.find('FAButton').at(1).prop('onPress')();
    expect(goBackMock).toHaveBeenCalled();
  });
});
