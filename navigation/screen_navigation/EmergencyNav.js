import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import EmergencyScreen from '../../screens/EmergencyScreen';

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
      header: null
    }
  }
);

export default EmergencyNav;
