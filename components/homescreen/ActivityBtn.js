import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../styles/colors';

const ActivityBtn = (props) => {
  const { height, width } = Dimensions.get('window');
  return (
    // <View style={[ styles.container ]}>
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.data.name);
      }}
      style={[ styles.container ]}
    >
      <Text style={[ styles.btnLabel ]}>{props.data.name}</Text>
    </TouchableOpacity>
    // </View>
  );
};

export default ActivityBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: COLORS.creme,
    borderRadius: 5,
    flexBasis: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  btnLabel: {
    color: COLORS.creme,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 20
    // padding: '10% 0'
  }
});
