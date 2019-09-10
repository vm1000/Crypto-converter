import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import CryptoConverter from './CryptoConverter';
import CryptoNews from './CryptoNews';
import Settings from './Settings'

function App() {
  return <AppContainer />;
}
export default App;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    CryptoConverter: {
      screen: CryptoConverter, navigationOptions: {
        tabBarLabel: 'Converter',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ height: 25, width: 25 }}
            source={require('./assets/menuConverter.png')} />
        )
      }
    },
    CryptoNews: {
      screen: CryptoNews, navigationOptions: {
        tabBarLabel: 'News',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ height: 25, width: 25 }}
            source={require('./assets/menuNews.png')} />
        )
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
);

const AppDrawerNavigator = createDrawerNavigator({
  Settings: {
    screen: DashboardStackNavigator
  },
  CryptoConverter: {
    screen: DashboardStackNavigator
  },
  CryptoNews: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  DashboardStackNavigator: { screen: DashboardStackNavigator },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
