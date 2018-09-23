// @flow
import React, { Component } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MealItem from './MealItem';
import FAColors from "../common/FAColors";
import FAStyleSheet from "../common/FAStyleSheet";
import type { MealType } from "../common/FATypes";

/** ============================================================================
<MealList
  mealList={MealType[]}
  onPressMeal: (MealType) => void
/>
--------------------------------------------------------------------------------
Displays a list of meals
============================================================================= */
type Props = {
  mealList: MealType[],
  onPressMeal: (MealType) => void
};
class MealList extends Component<Props> {

  static defaultProps = { mealList: [] };

  render() {
    const { mealList, onPressMeal } = this.props;

    return (
      <FlatList
        style={styles.container}
        data={mealList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MealItem
            meal={item}
            onPressMeal={onPressMeal}
          />
        )}
        ListEmptyComponent={() => (
          <Text>No meals available right now. Please try again later</Text>
        )}
      />
    );
  }
}

/* StyleSheet
============================================================================= */
const styles = FAStyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: FAColors.white
  }
});

/* Export
============================================================================= */
export default MealList;
