import React from 'react';
import {} from 'react-navigation';
import { View, TouchableHighlight, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const EmergencyBtn = (props) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => {
        props.navigation.navigate('Emergency');
      }}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: '50%',
    bottom: 100,
    right: 100,
    height: 44,
    backgroundColor: COLORS.erRed
  },
  text: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 30,
    color: COLORS.creme
  }
});

export default EmergencyBtn;
