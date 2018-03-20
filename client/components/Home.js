import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator'
import { connect } from 'react-redux'

class Home extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View>
        <Text>Welcome Tommy!</Text>

        <Button title='Augmented Reality' onPress={() => this.props.navigation.navigate('AR')} />
        <Button title='Choose Adventure' onPress={() => this.props.navigation.navigate('ChooseAdv')} />
        <Button title='Clue List' onPress={() => this.props.navigation.navigate('ClueList')} />
        <Button title='Log In' onPress={() => this.props.navigation.navigate('Login')} />
        <Button title='Map' onPress={() => this.props.navigation.navigate('TreasureMap')} />
        <Button title='Profile' onPress={() => this.props.navigation.navigate('Profile')} />
        <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')} />

      </View>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Home)
