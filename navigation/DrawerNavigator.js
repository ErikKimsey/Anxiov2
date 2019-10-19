import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import LinksScreen from '../screens/LinksScreen';
import HomeNav from '../navigation/screen_navigation/HomeScreenNav';
import EmergencyNav from '../navigation/screen_navigation/EmergencyNav';

import { createDrawerNavigator } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav
    },
    Emergency: {
      screen: EmergencyNav
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
