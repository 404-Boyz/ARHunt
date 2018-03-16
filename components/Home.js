import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator'
import ViroSample from './AR'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>Home Screen</Text>

        <Button title='Augmented Reality' onPress={() => this.props.navigation.navigate('AR')} />
        <Button title='Choose Adventure' onPress={() => this.props.navigation.navigate('ChooseAdv')} />
        <Button title='Clue List' onPress={() => this.props.navigation.navigate('ClueList')} />
        <Button title='Log In' onPress={() => this.props.navigation.navigate('LogIn')} />
        <Button title='Map' onPress={() => this.props.navigation.navigate('TreasureMap')} />
        <Button title='Profile' onPress={() => this.props.navigation.navigate('Profile')} />
        <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')} />

      </View>
    )
  }
}
