import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import EmergencyScreen from '../../screens/EmergencyScreen';

const HomeNav = createStackNavigator(
  {
    Emergency: {
      screen: EmergencyScreen
    },
    Home: {
      screen: HomeScreen
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default HomeNav;
