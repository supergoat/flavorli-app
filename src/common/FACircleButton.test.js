// @flow
import React from 'react';
import { View, Text } from 'react-native';
import FACircleButton from './FACircleButton';
import renderer from 'react-test-renderer';

describe('FACircleButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <FACircleButton
        text='button'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when disabled is true', () => {
    const tree = renderer.create(
      <FACircleButton
        text='button'
        disabled
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
