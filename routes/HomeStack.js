import { createStackNavigator } from '@react-navigation/native-stack';
import Details from '../components/Details';
import Home from '../components/Home';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details',
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60}
  }
});

export default (HomeStack)