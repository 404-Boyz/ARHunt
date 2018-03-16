import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';

export default class TreasureMap extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>That way lies madness!</Text>
        <Button title='Hit me' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}
