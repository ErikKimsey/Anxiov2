import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Button } from 'react-native-elements';
import COLORS, { COLORS_2 } from '../../styles/colors';

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerItems inactiveTintColor={COLORS.creme} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 100,
    backgroundColor: COLORS_2.deepBurgundy
  }
});

export default DrawerContent;
