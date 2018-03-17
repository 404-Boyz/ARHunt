
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RootStack from './components/Navigator'

export default class Root extends Component {
  render() {
    return <RootStack />;
  }
}
