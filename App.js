
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RootStack from './client/components/Navigator.js'
import store from './client/store'
import { Provider } from 'react-redux'
import io from 'socket.io-client'

export default class Root extends Component {
  constructor(props) {
    super(props)

    this.socket = io('https://b802bc28.ngrok.io')
    this.socket.on('connect', () => {
      console.log('Connected!')
    })
  }
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>);
  }
}








