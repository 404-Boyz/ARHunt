
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RootStack from './client/components/Navigator.js'
import store from './client/store'
import { Provider } from 'react-redux'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>);
  }
}
