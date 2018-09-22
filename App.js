// @flow
import React, {Component} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import FAColors from "./src/common/FAColors";
import FAStyleSheet from "./src/common/FAStyleSheet";
import FAHeader from "./src/presentational/FAHeader";
import MealList from "./src/presentational/MealList"

const mealList = [
  {
    id: '1',
    name: 'Lasagna',
    description: 'This is the lasagna description',
    price: '£12.00'
  },
  {
    id: '2',
    name: 'Spaghetti Bolognese',
    description: 'This is the Spaghetti Bolognese description',
    price: '£10.00'
  },
  {
    id: '3',
    name: 'Tiramisu',
    description: 'This is the Tiramisu description',
    price: '£5.00'
  }
]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FAHeader />
        <MealList mealList={mealList} />
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
