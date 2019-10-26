import React from 'react';
import { createAppContainer, createSwitchNavigatorm } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeNav from './screen_navigation/HomeScreenNav';
import DrawerNavigator from './DrawerNavigator';
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
