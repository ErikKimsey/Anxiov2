import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, Dimensions } from 'react-native';
import DrawerButton from '../navigation/components/DrawerButton';
import LoginSignupBtn from '../components/homescreen/LoginSignupBtn';
import EmergencyBtn from '../components/homescreen/EmergencyBtn';
import ActivityBtn from '../components/homescreen/ActivityBtn';
import { SCREENS } from './index';
import COLORS from '../styles/colors';
import DeviceDimensions from '../utility/responsiveDimensions';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    ``;
    this.state = {
      emergNav: null,
      screens: [],
      width: null,
      height: null,
      dimensionsObj: null
    };
  }

  componentDidMount() {
    this.setScreens();
    const dimensionsObj = new DeviceDimensions();
    dimensionsObj.setDeviceDimensions();
    const { height, width } = dimensionsObj.getDeviceDimensions();
    this.setState({
      height,
      width,
      dimensionsObj
    });
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
        <View style={[ styles.activityContainer, { width: this.state.width - 20 } ]}>
          {this.state.screens.map((e, i) => {
            return <ActivityBtn style={styles.activityBtn} key={i + 1} data={e} navigation={this.props.navigation} />;
          })}
        </View>
        <View style={styles.erBtn}>
          <EmergencyBtn text="Don't Panic" navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray
  },
  activityContainer: {
    // backgroundColor: COLORS.creme,
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
    margin: 5
  },
  erBtn: {
    position: 'absolute',
    width: '100%',
    left: 277,
    bottom: 25
  }
});
