// @flow
import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import FAColors from "../common/FAColors";
import FAStyleSheet from "../common/FAStyleSheet";

/** ============================================================================
<FAHeader />
--------------------------------------------------------------------------------
View Header
============================================================================= */
type Props = {}
class FAHeader extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.header}>
          <Text style={styles.title}>flavorli</Text>
        </View>
      </SafeAreaView>
    )
  }
}

/* StyleSheet
============================================================================= */
const styles = FAStyleSheet.create({
  safeAreaView: {
    backgroundColor: FAColors.alabaster
  },
  header: {
    flexDirection: 'row',
    zIndex: 1, // Removes shadow that is sometimes caused by react-navigation
    backgroundColor: FAColors.alabaster,
    borderBottomWidth: 1,
    borderBottomColor: FAColors.gallery,
    paddingBottom: 5
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: FAColors.oxfordBlue,
    fontFamily: 'Pacifico-Regular',
    fontSize: 30,
  }
});

/* Export
============================================================================= */
export default FAHeader;
