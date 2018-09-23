// @flow
import React, { Component } from "react";
import {
  Text,
  TouchableOpacity
} from "react-native";
import type {
   ViewStyleProp
} from 'react-native/Libraries/StyleSheet/StyleSheet';
import FAColors from "../common/FAColors";
import FAStyleSheet from "../common/FAStyleSheet";

/** ============================================================================
<FAButton
  type={'primary' | 'secondary'}
  text={string}
  style={ViewStyleProp}
/>
--------------------------------------------------------------------------------
A flavorli themed button
============================================================================= */
type Props = {
  type: 'primary' | 'secondary',
  text: string,
  style?: ViewStyleProp
};
class FAButton extends Component<Props> {
  render() {
    const { type, text, style, ...rest } = this.props;

    return (
      <TouchableOpacity
        {...rest}
        activeOpacity={type === 'primary' ? 0.8 : 0.6}
        style={[
          styles.button,
          type === 'primary' ? styles.primary : styles.secondary,
          style
        ]}
      >
        <Text style={[
          styles.buttonText,
          type === 'secondary' && styles.secondaryButtonText,
        ]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

/* StyleSheet
============================================================================= */
const styles = FAStyleSheet.create({
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 3,
    borderWidth: 1
  },
  primary: {
    backgroundColor: FAColors.oxfordBlue,
  },
  secondary: {
    borderColor: FAColors.oxfordBlue,
  },
  buttonText: {
    color: FAColors.white,
    fontFamily: 'Lato'
  },
  secondaryButtonText: {
    color: FAColors.oxfordBlue
  }
});

/* Export
============================================================================= */
export default FAButton;
