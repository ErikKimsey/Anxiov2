import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const ActivityBtn = (props) => {
  const { height, width } = Dimensions.get('window');
  return (
    <View style={[ styles.container ]}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(props.data.name);
        }}
      >
        <Text style={[ styles.btnLabel, { width: width / 3, height: width / 3 } ]}>{props.data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivityBtn;

const styles = StyleSheet.create({
  container: {
    // width: '33%',
    // height: '33%',
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#333',
    margin: 5
    // padding: '18%',
  },
  btnLabel: {
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: '50%'
  }
});
