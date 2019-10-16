import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Modal = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
      <TouchableOpacity>{props.buttonText}</TouchableOpacity>
    </View>
  );
};

export default Modal;
