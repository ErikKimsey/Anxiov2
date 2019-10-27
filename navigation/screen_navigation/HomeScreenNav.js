import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../screens/HomeScreen';
import EmergencyScreen from '../../screens/EmergencyScreen';
import { SCREENS } from '../../screens/index';
import COLORS, { COLORS_2 } from '../../styles/colors';

const HomeNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Emergency: {
      screen: EmergencyScreen
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
      header: null
    }
  }
);

export default HomeNav;
