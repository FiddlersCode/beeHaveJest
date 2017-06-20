import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


const Title = () => {
  return (
      <Text style={styles.welcome}>BeeHappy</Text>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
export default Title;
