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

class BeeTesting extends React.Component {
  static navigationOptions = {
    title: 'Bee Happy',
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

AppRegistry.registerComponent('BeeTesting', () => BeeTesting);