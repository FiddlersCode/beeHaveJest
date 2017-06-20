import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layoutImage: {
    alignItems: 'center'
  },
});

export default class BackgroundImage extends Component {
  render () {
    return (
      <View style={styles.layoutImage}>
        <Image
          source={require('./bee.jpeg')}
        />
      </View>
    );
  }
};
