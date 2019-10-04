import React from 'react';
import { View, TouchableHighlight, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LoginSignupBtn = (props) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    // flex: 1,
    width: '80%',
    height: 44,
    color: '#000',
    backgroundColor: 'gray'
  }
});

export default LoginSignupBtn;
