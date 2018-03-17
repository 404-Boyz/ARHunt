
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RootStack from './client/components/Navigator.js'

export default class Root extends Component {
  render() {
    return <RootStack />;
  }
}
