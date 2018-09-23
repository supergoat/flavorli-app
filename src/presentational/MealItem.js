// @flow
import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";
import FAColors from "../common/FAColors";
import FAStyleSheet from "../common/FAStyleSheet";
import type { MealType } from "../common/FATypes";

/** ============================================================================
<MealItem
  meal={MealType}
  onPressMeal: (MealType) => void
/>
--------------------------------------------------------------------------------
An item in the meal list
============================================================================= */
type Props = {
  meal: MealType,
  onPressMeal: (MealType) => void
};
class MealItem extends Component<Props> {
  render() {
    const { meal, onPressMeal } = this.props;

    return (
      <TouchableOpacity
        key={meal.id}
        style={styles.meal}
        onPress={() => onPressMeal(meal)}
      >
        <Text style={styles.mealName}>{meal.name}</Text>
        <Text style={styles.mealDescription}>{meal.description}</Text>
        <Text style={styles.mealPrice}>£{meal.price.toFixed(2)}</Text>
      </TouchableOpacity>
    );
  }
}

/* StyleSheet
============================================================================= */
const styles = FAStyleSheet.create({
  meal: {
    borderBottomWidth: 1,
    borderBottomColor: FAColors.gallery,
    padding: 10,
    paddingVertical: 20
  },
  mealName: {
    fontSize: 18,
    color: FAColors.oxfordBlue,
    fontFamily: 'Lato'
  },
  mealDescription: {
    paddingVertical: 10,
    fontSize: 16,
    color: FAColors.osloGrey,
    fontFamily: 'Lato'
  },
  mealPrice: {
    fontSize: 16,
    color: FAColors.rollingStone,
    fontFamily: 'Lato'
  }
});

/* Export
============================================================================= */
export default MealItem;
