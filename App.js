
import React, { Component } from 'react';
import NavigationService from './client/components/NavigationService';
import RootStack from './client/components/Navigator.js'
import store from './client/store'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import Expo, { Font, AppLoading } from 'expo'
import { Root } from 'native-base'

export default class Main extends Component {
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
        <Root>
          <Provider store={store}>
            <RootStack ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }} />
          </Provider>
        </Root>
      )
    }
  }
  async _cacheResourcesAsync() {
    await Font.loadAsync({
      'oswald-light': require('./client/assets/fonts/Oswald-Light.ttf'),
      'oswald-bold': require('./client/assets/fonts/Oswald-Bold.ttf')
    });
  }
}
