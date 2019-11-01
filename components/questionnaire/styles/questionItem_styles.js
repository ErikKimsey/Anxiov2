import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS, { COLORS_2 } from '../../../styles/colors';

const questionItemStyles = StyleSheet.create({
  generalStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1
  }
});

export default questionItemStyles;
