
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RootStack from './client/components/Navigator.js'
import store from './client/store'
import { Provider } from 'react-redux'
import io from 'socket.io-client'

export default class Root extends Component {
  constructor(props) {
    super(props)

    this.socket = io('https://peaceful-dawn-66038.herokuapp.com')
    this.socket.on('connect', () => {
      console.log('Hunting the most dangerous game')
    })
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>);
  }
}








