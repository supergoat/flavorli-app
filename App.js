// @flow
import React, {Component} from 'react';
import { View } from 'react-native';
import type { NavigationState } from 'react-navigation';
import RootStack from './RootStack';
import FAColors from './src/common/FAColors';
import FAStyleSheet from "./src/common/FAStyleSheet";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = FAStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FAColors.white
  }
});
