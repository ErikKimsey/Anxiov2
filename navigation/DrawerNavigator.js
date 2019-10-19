import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import HomeNav from '../navigation/screen_navigation/HomeScreenNav';

import { createDrawerNavigator } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      header: 'none'
    },
    EmergencyScreen: {
      screen: EmergencyScreen
    },
    LinksScreen: {
      screen: LinksScreen
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default DrawerNavigator;
