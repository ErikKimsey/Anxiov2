import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { DrawerActions } from 'react-navigation';
import DrawerButton from '../navigation/components/DrawerButton';
export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Button
        title="YOYOY"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
    )
  });
  constructor(props) {
    super(props);
    ``;
    this.state = {
      emergNav: null
    };
  }

  componentDidMount() {
    this.setState({
      emergNav: this.props.navigation.navigate('Emergency')
    });
  }

  handleNavigation = (route) => {
    this.props.navigation.navigate('LinksScreen');
  };
  render() {
    return (
      <View>
        <Text>HOME</Text>
      </View>
    );
  }
}
