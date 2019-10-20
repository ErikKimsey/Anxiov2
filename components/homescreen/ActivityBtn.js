import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActivityBtn = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate(props.data.name);
      }}
    >
      <Text style={styles.btnLabel}>{props.data.name}</Text>
    </TouchableOpacity>
  );
};

export default ActivityBtn;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: 150,
    height: 150,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    margin: 5
  },
  btnLabel: {
    color: '#ffffff'
  }
});
