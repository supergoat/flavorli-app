// @flow
import React from 'react';
import { View, Text } from 'react-native';
import FAHeader from './FAHeader';
import renderer from 'react-test-renderer';

describe('FAHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FAHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
