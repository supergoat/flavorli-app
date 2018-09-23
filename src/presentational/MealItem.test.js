// @flow
import React from 'react';
import { View, Text } from 'react-native';
import MealItem from './MealItem';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const meal = {
  id: '1',
  name: 'Lasagna',
  description: 'This is the lasagna description',
  price: 12.00
}

describe('MealItem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MealItem
        meal={meal}
        onPressMeal={jest.fn()}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPressMeal when a meal is pressed', () => {
    const onPressMealMock = jest.fn();

    const component = shallow(
      <MealItem
        meal={meal}
        onPressMeal={onPressMealMock}
      />
    );

    // Call onPress
    component.prop('onPress')();

    expect(onPressMealMock).toHaveBeenCalledWith(meal)
  });
});
