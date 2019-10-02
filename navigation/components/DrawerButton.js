import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions, DrawerActions } from 'react-navigation';
import { logicalExpression } from '@babel/types';
console.log(NavigationActions);

const DrawerButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(props);
        props.navigation.dispatch(DrawerActions.toggleDrawer());
      }}
    >
      <Text>YOYOYOYO</Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
