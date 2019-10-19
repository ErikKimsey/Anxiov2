import React from 'react';
import { createAppContainer, createSwitchNavigatorm, createStackNavigator } from 'react-navigation';
import HomeNav from './screen_navigation/HomeScreenNav';
import DrawerNavigator from './DrawerNavigator';
import HomeScreen from '../screens/HomeScreen';
import EmergencyScreen from '../screens/EmergencyScreen';

const App = createStackNavigator(
  {
    Home: {
      screen: DrawerNavigator
    },
    Emergency: {
      screen: EmergencyScreen
    },
    App: DrawerNavigator
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(App);
