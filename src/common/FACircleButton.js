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
<FACircleButton
  text={string}
  disabled={boolean}
/>
--------------------------------------------------------------------------------
A flavorli themed circular button
============================================================================= */
type Props = {
  text: string,
  disabled?: boolean
};
class FACircleButton extends Component<Props> {
  render() {
    const { text, disabled, ...rest } = this.props;

    return (
      <TouchableOpacity
        {...rest}
        disabled={disabled}
        activeOpacity={0.8}
        style={[
          styles.button,
          disabled && styles.disabled
        ]}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

/* StyleSheet
============================================================================= */
const styles = FAStyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: FAColors.oxfordBlue
  },
  buttonText: {
    fontSize: 25,
    color: FAColors.oxfordBlue,
    fontFamily: 'Lato',
    fontWeight: 'bold'
  },
  disabled: {
    opacity: 0.5
  }
});

/* Export
============================================================================= */
export default FACircleButton;
