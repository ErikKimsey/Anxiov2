import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import DrawerButton from '../navigation/components/DrawerButton';
import LoginSignupBtn from '../components/homescreen/LoginSignupBtn';
import EmergencyBtn from '../components/homescreen/EmergencyBtn';
import ActivityBtn from '../components/homescreen/ActivityBtn';
import { SCREENS } from './index';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    ``;
    this.state = {
      emergNav: null,
      screens: []
    };
  }

  componentDidMount() {
    this.setScreens();
  }

  handleNavigation = (route) => {
    this.props.navigation.navigate(route);
  };

  setScreens = () => {
    const screens = SCREENS;
    this.setState({ screens: [ ...screens ] });
  };

  render() {

    return (
      <View style={styles.container}>
        <DrawerButton navigation={this.props.navigation} />
        <View style={styles.signupContainer}>
          {this.state.screens.map((e, i) => {
            return <ActivityBtn key={i + 1} data={e} navigation={this.props.navigation} />;
          })}
        </View>
        {/* <View> */}
        <EmergencyBtn text="Don't Panic" navigation={this.props.navigation} />
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
    // backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
