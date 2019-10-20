import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const ActivityBtn = (props) => {
  console.log('====================================');
  console.log(props.navigation);
  console.log('====================================');

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.data.name);
      }}
    >
      <Text>{props.data.name}</Text>
    </TouchableOpacity>
  );
};

export default ActivityBtn;
