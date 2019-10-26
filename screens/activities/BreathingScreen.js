import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS, { COLORS_2 } from '../../styles/colors';

export default class BreathingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Breathing</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS_2.gray
  }
});
