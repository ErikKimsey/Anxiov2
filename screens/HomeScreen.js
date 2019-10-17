import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import DrawerButton from '../navigation/components/DrawerButton';
import LoginSignupBtn from '../components/homescreen/LoginSignupBtn';
import EmergencyBtn from '../components/homescreen/EmergencyBtn';
import { Provder, Consumer } from '../store/Context';

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
      <View style={styles.container}>
        <View>{/* header / logo */}</View>
        <DrawerButton navigation={this.props.navigation} />
        <View style={styles.signupContainer}>
          <LoginSignupBtn text="Login" />
          <LoginSignupBtn text="Sign Up" />
        </View>
        {/* <View> */}
        <EmergencyBtn text="Don't Panic" />
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  signupContainer: {
    width: 300,
    height: 200,
    backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
