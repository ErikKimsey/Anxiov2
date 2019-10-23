import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../styles/colors';

export default class BubbleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>BUBBLEUBBABBA</Text>
        <TouchableOpacity>
          <Text>BUBBLEUBBABBA</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>BUBBLEUBBABBA</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>BUBBLEUBBABBA</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>BUBBLEUBBABBA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray
  }
});
