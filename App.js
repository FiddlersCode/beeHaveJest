import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Title from './src/Title.js';
import BackgroundImage from './src/BackgroundImage.js';

class Bees extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Bees',
  };
  render() {
    return (
      <View>
        <Title />
        <BackgroundImage />
      </View>
    )
  }
}

const BeeTesting = StackNavigator({
  Home: { screen: Bees },
});

AppRegistry.registerComponent('BeeTesting', () => BeeTesting);
