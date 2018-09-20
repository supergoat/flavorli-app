// @flow
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import FAColors from "../common/FAColors";
import FAStyleSheet from "../common/FAStyleSheet";

/* Constants
============================================================================= */
const STATUS_BAR_HEIGHT = 20;

/** ============================================================================
<FAHeader />
--------------------------------------------------------------------------------
View Header
============================================================================= */
type Props = {}
class FAHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>flavorli</Text>
      </View>
    )
  }
}

/* StyleSheet
============================================================================= */
const styles = FAStyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 5,
    paddingTop: STATUS_BAR_HEIGHT + 10,
    zIndex: 1, // Removes shadow that is sometimes caused by react-navigation
    backgroundColor: FAColors.alabaster,
    borderBottomWidth: 1,
    borderBottomColor: FAColors.gallery,
  },
  title: {
    flex: 1, // Take remaining space
    textAlign: 'center',
    color: FAColors.oxfordBlue,
    fontFamily: 'Pacifico-Regular',
    fontSize: 30,
  }
});

/* Export
============================================================================= */
export default FAHeader;
