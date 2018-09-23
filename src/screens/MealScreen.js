// @flow
import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import FAColors from "../common/FAColors";
import FAStyleSheet from "../common/FAStyleSheet";
import FAButton from "../common/FAButton";
import FACircleButton from "../common/FACircleButton";
import type { NavigationScreenProp } from "react-navigation";
import type { MealType } from "../common/FATypes";

/** ============================================================================
<MealScreen
  meal={MealType}
  navigation={NavigationScreenProp}
/>
--------------------------------------------------------------------------------
Displays the meal, and provides and interface for the viewer to add it to the
basket
============================================================================= */
type State = {
  quantity: number
};
type Props = {
  navigation: NavigationScreenProp
};
class MealScreen extends Component<Props, State> {
  state = { quantity: 1 };

  render() {
    const { navigation } = this.props;
    const { quantity } = this.state;

    const meal = navigation.getParam("meal", null);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: FAColors.alabaster }}>
        <View style={styles.container}>
          <Text style={styles.mealName}>
            {meal.name}
          </Text>

          <Text style={styles.mealPrice}>
            £{meal.price.toFixed(2)}
          </Text>

          <Text style={styles.mealDescription}>
            {meal.description}
          </Text>

          <View style={styles.buttons}>
            <FACircleButton
              disabled={quantity <= 1}
              onPress={this.decreaseQty}
              text="-"
            />

            <Text style={styles.qtyText}>{quantity}</Text>

            <FACircleButton
              disabled={quantity >= 10}
              onPress={this.increaseQty}
              text="+"
            />
          </View>

          <View style={styles.buttons}>
            <FAButton
              type="secondary"
              onPress={() => navigation.goBack()}
              style={styles.cancelButton}
              text="Cancel"
            />

            <FAButton
              type="primary"
              onPress={() => navigation.goBack()}
              style={styles.addButton}
              text={`Add For £${(meal.price * quantity).toFixed(2)}`}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  /**
   * Increase the quantity by 1
   */
  increaseQty = () => {
    const { quantity } = this.state;
    if (quantity < 10) this.setState({ quantity: quantity + 1 });
  }

  /**
   * Decreases the quantity by 1
   */
  decreaseQty = () => {
    const { quantity } = this.state;
    if (quantity > 1) this.setState({ quantity: quantity - 1 });
  }
}

/* StyleSheet
============================================================================= */
const styles = FAStyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: FAColors.alabaster
  },
  mealName: {
    fontFamily: "Lato",
    fontSize: 30,
    color: FAColors.oxfordBlue,
    paddingVertical: 10
  },
  mealPrice: {
    fontFamily: "Lato",
    fontSize: 20,
    color: FAColors.rollingStone
  },
  mealDescription: {
    fontFamily: "Lato",
    paddingTop: 20,
    fontSize: 18,
    color: FAColors.osloGrey
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40
  },
  qtyText: {
    fontSize: 25,
    fontFamily: "Lato",
    fontWeight: "bold",
    marginHorizontal: 20,
    width: 40,
    textAlign: "center"
  },
  cancelButton: {
    marginRight: 15
  },
  addButton: {
    flex: 2
  }
});

/* Export
============================================================================= */
export default MealScreen;
