import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../screens/HomeScreen';
import EmergencyScreen from '../../screens/EmergencyScreen';
import COLORS, { COLORS_2 } from '../../styles/colors';

const EmergencyNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Emergency: {
      screen: EmergencyScreen
    }
  },
  {
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default EmergencyNav;
