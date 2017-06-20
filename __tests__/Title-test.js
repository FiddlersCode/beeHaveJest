'use strict';

import 'react-native'
import React from 'react'
import Title from '../src/Title.js'
import renderer from 'react-test-renderer'

test('renders correctly', () =>{
  const tree = renderer.create (
    <Title />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
