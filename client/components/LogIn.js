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
          value={this.state.userName}
          onChangeText={value => this.setState({ user: value })}
        />
        <Input
          style={inputStyle}
          placeholder='Password'
          value={this.state.password}
          onChangeText={value => this.setState({ password: '' })}
        />
        <Button title='Start your hunt!' onPress={() => {
          props.
            this.props.navigation.navigate('Home')

        }} />
        <Image style={{ width: 200, height: 200, alignSelf: 'center' }} source={{ uri: 'http://www.parc-des-pirates.com/uk/img/logo.png' }}
        />
      </View>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSignUp(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const name = evt.target.userName.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName, name))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)

const inputStyle = { margin: 15 }
