// @flow
import React from 'react';
import { View, Text } from 'react-native';
import MealList from './MealList';
import renderer from 'react-test-renderer';

describe('MealList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MealList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when is a list of meals is passed as a prop', () => {
    const mealList = [
      {
        id: '1',
        name: 'Lasagna',
        description: 'This is the lasagna description',
        price: '£12.00'
      },
      {
        id: '2',
        name: 'Spaghetti Bolognese',
        description: 'This is the Spaghetti Bolognese description',
        price: '£10.00'
      },
      {
        id: '3',
        name: 'Tiramisu',
        description: 'This is the Tiramisu description',
        price: '£5.00'
      }
    ]


    const tree = renderer.create(<MealList mealList={mealList} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
