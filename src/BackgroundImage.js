import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class BackgroundImage extends Component {
  render () {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('./bee.jpeg')}
        />
      </View>
    );
  }
};
