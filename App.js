// @flow
import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import FAColors from "./src/common/FAColors";
import FAStyleSheet from "./src/common/FAStyleSheet";
import FAHeader from "./src/presentational/FAHeader";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FAHeader />
      </View>
    );
  }
}

const styles = FAStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FAColors.white,
  }
});
