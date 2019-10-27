import React from 'react';
import { createAppContainer, createSwitchNavigatorm } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeNav from './screen_navigation/HomeScreenNav';
import DrawerNavigator from './DrawerNavigator';
import EmergencyScreen from '../screens/EmergencyScreen';
import COLORS, { COLORS_2 } from '../styles/colors';

const App = createStackNavigator(
  {
    App: DrawerNavigator
  },
  {
    header: null,
    headerMode: 'none',
    headerVisible: false
  }
);

export default createAppContainer(App);
