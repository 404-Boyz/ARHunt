
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RootStack from './client/components/Navigator.js'
import store from './client/store'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import { Font, AppLoading } from 'expo'

export default class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isReady: false,
    }

    this.socket = io('https://peaceful-dawn-66038.herokuapp.com')
    this.socket.on('connect', () => {
      console.log('Hunting the most dangerous game. Release the sockets!')
    })
  }

  render() {
    if (this.state.isReady === false) {
    return (
      <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />)
    } else {
     return (
      <Provider store={store}>
        <RootStack />
      </Provider>
      )
  }
}
  async _cacheResourcesAsync() {
     await Font.loadAsync({
      'oswald-light': require('./client/assets/fonts/Oswald-Light.ttf'),
    });
  }
}
