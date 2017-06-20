import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Button,
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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Title headerText={'Bee Have'}/>
        <BackgroundImage />
        <Button
          onPress={() => navigate('Silly')}
          title='Bee Silly'
        />
      </View>
    )
  }
}

class BeeSilly extends React.Component {
  static navigationOptions = {
    title: 'Bee So Silly!',
  };
  render() {
    return (
      <View>
        <Title headerText={'Bee Silly'}/>
        <Text> How silly are you beeeeeeing? </Text>
      </View>
    );
  }
}

const BeeTesting = StackNavigator({
  Home: { screen: Bees },
  Silly: { screen: BeeSilly },
});

AppRegistry.registerComponent('BeeTesting', () => BeeTesting);
