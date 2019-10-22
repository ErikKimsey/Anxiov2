import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActivityBtn = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(props.data.name);
        }}
      >
        <Text style={styles.btnLabel}>{props.data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivityBtn;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#333',
    margin: 5
  },
  btnLabel: {
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: '45%'
  }
});
