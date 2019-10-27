import React from 'react';
import { createDrawerNavigator, DrawerNavigatorConfig } from 'react-navigation-drawer';
import HomeNav from '../navigation/screen_navigation/HomeScreenNav';
import EmergencyNav from '../navigation/screen_navigation/EmergencyNav';
import { SCREENS } from '../screens/index';
import EmergencyScreen from '../screens/EmergencyScreen';
import DrawerContent from './screen_navigation/DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import COLORS, { COLORS_2 } from '../styles/colors';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerLabel: 'Home',
        activeTintColor: '#e91e63',
        inactiveTintColor: '#ffffff'
      },
      screen: HomeScreen
    },
    Emergency: {
      navigationOptions: {
        drawerLabel: 'ER',
        activeTintColor: '#e91e63',
        inactiveTintColor: '#ffffff'
      },
      screen: EmergencyScreen
    },
    Breathing: {
      navigationOptions: {
        drawerLabel: 'Breathe'
      },
      screen: SCREENS[0].screen
    },
    Data: {
      navigationOptions: {
        drawerLabel: 'Data'
      },
      screen: SCREENS[1].screen
    },
    Bubble: {
      navigationOptions: {
        drawerLabel: 'Bubble'
      },
      screen: SCREENS[2].screen
    }
  },
  {
    // contentComponent: DrawerContent
    // navigationOptions: {
    //   // background
    //   // activeTintColor: '#e91e63',
    //   // inactiveTintColor: '#ffffff'
    // }
  }
);

// const drawerConfig = DrawerNavigatorConfig({
//   activeTintColor: '#e91e63',
//   inactiveTintColor: '#ffffff'
// });

export default DrawerNavigator;
