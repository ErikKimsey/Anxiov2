import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import { createDrawerNavigator, DrawerActions } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
const MyDrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  LinksScreen: {
    screen: LinksScreen
  }
});

// const MyApp = createAppContainer(MyDrawerNavigator);
export default MyDrawerNavigator;
