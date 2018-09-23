import { createStackNavigator } from 'react-navigation';
import type { NavigationContainerProps } from 'react-native';
import * as ReactNavigation from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import MealScreen from './src/screens/MealScreen';

/** ============================================================================
<RootStack />
--------------------------------------------------------------------------------
Responsible for navigation in the app
============================================================================= */
const RootStack : NavigationContainerProps = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Meal: {
      screen: MealScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

/* Export
============================================================================= */
export default RootStack;
