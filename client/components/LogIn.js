import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { Input } from 'nachos-ui'


export default class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      password: '',
    }
  }
  render() {
    return (
      <View style={{}}>
        <Text style={{ alignSelf: 'center', fontSize: 30 }}>Log in!</Text>
        <Input
          style={inputStyle}
          placeholder='User name'
          value={this.state.value}
          onChangeText={value => this.setState({ user: value })}
        />
        <Input
          style={inputStyle}
          placeholder='Password'
          value={this.state.value}
          onChangeText={value => this.setState({ password: '' })}
        />
        <Button title='Start your hunt!' onPress={() => this.props.navigation.navigate('Home')} />
        <Image style={{ width: 200, height: 200, alignSelf: 'center' }} source={{ uri: 'http://www.parc-des-pirates.com/uk/img/logo.png' }}
        />
      </View>
    )
  }
}

const inputStyle = { margin: 15 }
