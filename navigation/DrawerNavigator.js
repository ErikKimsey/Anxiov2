import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import LinksScreen from '../screens/LinksScreen';
import HomeNav from '../navigation/screen_navigation/HomeScreenNav';
import EmergencyNav from '../navigation/screen_navigation/EmergencyNav';
import { SCREENS } from '../screens/index';
import { createDrawerNavigator } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav
    },
    Emergency: {
      screen: EmergencyNav
    },
    Breathing: {
      screen: SCREENS[0].screen
    },
    Data: {
      screen: SCREENS[1].screen
    },
    Bubble: {
      screen: SCREENS[2].screen
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default DrawerNavigator;
