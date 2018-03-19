import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { Input } from 'nachos-ui'
import { connect } from 'react-redux'
import { auth } from '../store'


class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={{}}>
        <Text style={{ alignSelf: 'center', fontSize: 30 }}>Log in!</Text>
        <Input
          name='userName'
          style={inputStyle}
          placeholder='User name'
          value={this.state.name}
          onChangeText={value => {
            this.setState({ name: value }, () => console.log(this.state.name))

          }}
        />
        <Input
          name='password'
          style={inputStyle}
          placeholder='Password'
          value={this.state.password}
          onChangeText={value => this.setState({ password: value })}
        />
        <Button title='Start your hunt!' onPress={(evt) => this.props.handleLogIn(evt)} />
        <Button title="Don't have an account? Sign up now!" onPress={() => {
          props.this.props.navigation.navigate('SignUp')

        }} />

        <Image style={{ width: 200, height: 200, alignSelf: 'center' }} source={{ uri: 'http://www.parc-des-pirates.com/uk/img/logo.png' }}
        />
      </View>
    )
  }

}


const mapDispatch = (dispatch, ownProps) => {
  return {
    handleLogIn(evt) {
      const formName = 'logIn'
      const userName = evt.target.userName
      const password = evt.target.password
      dispatch(auth(password, formName, userName))
    }
  }
}



export const Login = connect(null, mapDispatch)(LogIn)

const inputStyle = { margin: 15 }
