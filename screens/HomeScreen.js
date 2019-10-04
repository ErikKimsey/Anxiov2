import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import DrawerButton from '../navigation/components/DrawerButton';

export default class HomeScreen extends Component {
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
        <DrawerButton navigation={this.props.navigation} />
      </View>
    );
  }
}
