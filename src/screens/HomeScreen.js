// @flow
import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import FAColors from "../common/FAColors";
import FAStyleSheet from "../common/FAStyleSheet";
import FAHeader from "../presentational/FAHeader";
import MealList from "../presentational/MealList"
import type { NavigationScreenProp } from 'react-navigation';
import type { MealType } from "../common/FATypes";

/** ============================================================================
<HomeScreen
  navigation={NavigationScreenProp}
/>
--------------------------------------------------------------------------------
Displays a list of meals, and allows the viewer to navigate to the meal screen
of each meal
============================================================================= */
type Props = {
  navigation: NavigationScreenProp
};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FAHeader />
        <MealList
          mealList={mealList}
          onPressMeal={this.navigateToMeal}
        />
      </View>
    );
  }

  /**
   * Navigates the viewer to the meal screen passing the meal as a param
   */
  navigateToMeal = (meal: MealType) => {
    const { navigation } = this.props;
    navigation.navigate('Meal', { meal: meal })
  }
}

const styles = FAStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FAColors.white,
  }
});

const mealList = [
  {
    id: '1',
    name: 'Lasagna alla bolognese',
    description: 'This is the lasagna description',
    price: 12.00
  },
  {
    id: '2',
    name: 'Spaghetti Bolognese',
    description: 'This is the Spaghetti Bolognese description',
    price: 10.00
  },
  {
    id: '3',
    name: 'Tiramisu',
    description: 'This is the Tiramisu description',
    price: 5.00
  }
]
