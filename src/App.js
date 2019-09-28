import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import GameSetupScreen from './screens/GameSetupScreen';
import ScoreScreen from './screens/ScoreScreen';
import SettingsScreen from './screens/SettingsScreen';
import GamePlaygroundScreen from './screens/GamePlaygroundScreen';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    GameSetup: {
      screen: GameSetupScreen,
    },
    GamePlayground: {
      screen: GamePlaygroundScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Score: {
      screen: ScoreScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);
