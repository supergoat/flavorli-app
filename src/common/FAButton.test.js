// @flow
import React from 'react';
import { View, Text } from 'react-native';
import FAButton from './FAButton';
import renderer from 'react-test-renderer';

describe('FAButton', () => {
  it('renders correctly when the button is of type primary', () => {
    const tree = renderer.create(
      <FAButton
        type='primary'
        text='button'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when the button is of type secondary', () => {
    const tree = renderer.create(
      <FAButton
        type='secondary'
        text='button'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
