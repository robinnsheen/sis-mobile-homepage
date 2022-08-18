import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = (items) => (
  <Navigator initialRouteName='Home'>
    <Screen name='HomeStack'>
      {(props) => <HomeStack items={items} />}
    </Screen>
  </Navigator>
);

export const AppNavigator = (items) => (
  <NavigationContainer>
    <RootDrawerNavigator items={items}/>
  </NavigationContainer>
);

export default AppNavigator;