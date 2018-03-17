import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';

export default class LogIn extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>Log in sucker!</Text>
        <Button title='Hit me' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}
