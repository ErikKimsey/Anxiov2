import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import DrawerButton from '../navigation/components/DrawerButton';

export default function LinksScreen(props) {
  return (
    <View style={styles.container}>
      <DrawerButton navigation={props.navigation} />
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f0f'
  }
});
