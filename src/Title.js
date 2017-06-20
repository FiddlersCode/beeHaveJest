import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>BeeHappy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
export default Title;
