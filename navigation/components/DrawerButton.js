import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const DrawerButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.toggleDrawer();
      }}
      style={styles.btnContainer}
    >
      <Ionicons name="md-menu" style={styles.menu} />
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
  },
  menu: {
    fontSize: 40,
    color: '#e100e0'
  }
});

export default DrawerButton;
