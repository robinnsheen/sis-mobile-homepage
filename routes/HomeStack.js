import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
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

const { Navigator, Screen } = createNativeStackNavigator();

export const HomeStack = (items) => (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e46b66',
        },
        headerTitleStyle: {
          fontFamily: 'Georgia',
          fontSize: 20,
        }
      }}
    >
      <Screen name="Home" options={{ title: "{ R } Rithm 99" }}>
        {(props) => <Home items={items} />}
      </Screen>
      <Screen name="Details">
        {(props) => <Details items={items} />}
      </Screen>
    </Navigator>
)

export default HomeStack;