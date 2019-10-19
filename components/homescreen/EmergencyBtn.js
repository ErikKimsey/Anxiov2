import React from 'react';
import {} from 'react-navigation';
import { View, TouchableHighlight, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmergencyBtn = (props) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => {
        props.navigation.navigate('Emergency');
      }}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: '50%',
    bottom: 100,
    right: 100,
    height: 44,
    color: '#000',
    backgroundColor: '#a0a'
  }
});

export default EmergencyBtn;
