import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import EmergencyScreen from '../screens/EmergencyScreen';

import { createDrawerNavigator, DrawerActions } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
const MyDrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  EmergencyScreen: {
    screen: EmergencyScreen
  },
  LinksScreen: {
    screen: LinksScreen
  }
});

// const MyApp = createAppContainer(MyDrawerNavigator);
export default MyDrawerNavigator;
