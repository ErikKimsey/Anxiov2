import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../styles/colors';

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
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: COLORS.creme,
    borderRadius: 5,
    flexBasis: '50%',
    flexShrink: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  btnLabel: {
    paddingTop: '30%',
    color: COLORS.creme,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20
  }
});
