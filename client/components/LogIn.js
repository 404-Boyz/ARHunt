import React, { Component } from 'react';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { connect } from 'react-redux'
import { authLogIn } from '../store'
import { RootStack } from './Navigator'
import { Container, Header, Content, Item, Input, Text, Left, Right, Button, Form } from 'native-base'

class LogIn extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      password: ''
    }
  }

  render() {
    return (<Container>
      <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }} >
        <Left />
        <Right />
      </Header>
      <Content>
        <Text style={{ alignSelf: 'center', fontSize: 40 }}>Log In!</Text>
        <Form style={{ margin: 15 }}>
          <Item regular style={{ margin: 15 }}>
            <Input
              placeholder='User Name' value={this.state.userName}
              onChangeText={(value) => this.setState({ userName: value })
              } />
          </Item>
          <Item regular style={{ margin: 15 }}>
            <Input
              placeholder='Password' value={this.state.password}
              onChangeText={(value) => this.setState({ password: value })
              } />
          </Item>
        </Form>
        <Button style={{ alignSelf: 'center' }} rounded onPress={this.props.handleLogIn.bind(this, this.state.name, this.state.password)}>
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>)
  }

}


const mapDispatch = (dispatch) => {

  return {
    handleLogIn(name, password) {
      console.log(name, password);
      dispatch(authLogIn(name, password, 'login'))
      this.props.navigation.navigate('Profile')
    }
  }
}


export default connect(null, mapDispatch)(LogIn)

const inputStyle = { margin: 15 }
