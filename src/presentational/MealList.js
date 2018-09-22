// @flow
import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import FAColors from "../common/FAColors";
import FAStyleSheet from "../common/FAStyleSheet";

/** ============================================================================
<MealList
  mealList={MealType[]}
/>
--------------------------------------------------------------------------------
Displays a list of meals
@param { array } mealList - List of meals
============================================================================= */
type MealType = {
  id: string,
  name: string,
  description: string,
  price: string
};
type Props = {
  mealList: MealType[]
};
class MealList extends Component<Props> {
  static defaultProps = { mealList: [] };

  render() {
    const { mealList } = this.props;
    return (
      <FlatList
        style={styles.container}
        data={mealList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.meal}>
              <Text style={styles.mealName}>{item.name}</Text>
              <Text style={styles.mealDescription}>{item.description}</Text>
              <Text style={styles.mealPrice}>{item.price}</Text>
            </View>
          );
        }}
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
    padding: 10
  },
  meal: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: FAColors.gallery,
    padding: 10,
    paddingVertical: 20
  },
  mealName: {
    fontFamily: "Lato",
    fontSize: 18,
    color: FAColors.oxfordBlue
  },
  mealDescription: {
    fontFamily: "Lato",
    paddingVertical: 10,
    fontSize: 16,
    color: FAColors.osloGrey
  },
  mealPrice: {
    fontFamily: "Lato",
    fontSize: 16,
    color: FAColors.rollingStone
  }
});

/* Export
============================================================================= */
export default MealList;
