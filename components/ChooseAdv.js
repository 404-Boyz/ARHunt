import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';


export default class ChooseAdv extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>Choose Your Adventure!</Text>
        <Button title='Hit me' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}
