import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { logicalExpression } from '@babel/types';

const DrawerButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.toggleDrawer();
      }}
      style={styles.btnContainer}
    >
      <Text>YOYOYOYO</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 40,
    width: 40,
    position: 'absolute',
    margin: 2,
    top: 36,
    left: 20,
    color: 'pink'
  }
});

export default DrawerButton;
