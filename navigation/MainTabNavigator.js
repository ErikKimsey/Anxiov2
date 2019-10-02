import React from 'react';
import { Platform, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import DrawerButton from './components/DrawerButton';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const config = Platform.select({
  web: { headerMode: 'screen' }
  // default: DrawerNavigator
});

const HomeStack = createStackNavigator({
  HomeScreen: DrawerNavigator
});

HomeStack.navigationOptions = {
  tabBarLabel: 'HomeScreen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  )
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
};

LinksStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack
});

tabNavigator.path = '';

export default tabNavigator;
