import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../styles/colors';
const DrawerButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.toggleDrawer();
      }}
      style={styles.btnContainer}
    >
      <Ionicons name="md-menu" style={styles.menuBtn} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 40,
    width: 40,
    position: 'absolute',
    margin: 2,
    top: 66,
    left: 20
  },
  menuBtn: {
    fontSize: 40,
    color: COLORS.creme
  }
});

export default DrawerButton;
