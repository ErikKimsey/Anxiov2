import BreathingScreen from './activities/BreathingScreen';
import DataScreen from './data_screens/DataScreen';
import BubbleScreen from './BubbleScreen';

const SCREENS = [
  { name: 'Breathing', screen: BreathingScreen },
  { name: 'Data', screen: DataScreen },
  { name: 'Bubble', screen: BubbleScreen }
];

export { SCREENS };
