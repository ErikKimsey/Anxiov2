import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../screens/HomeScreen';
import EmergencyScreen from '../../screens/EmergencyScreen';
import { SCREENS } from '../../screens/index';

const EmergencyNav = createStackNavigator(
  {
    Emergency: {
      screen: EmergencyScreen
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Breathing: {
      screen: SCREENS[0].screen
    },
    Data: {
      screen: SCREENS[1].screen
    },
    Bubble: {
      screen: SCREENS[2].screen
    }
  },
  {
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default EmergencyNav;
