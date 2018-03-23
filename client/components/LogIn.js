import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { StackNavigator, navigationOptions } from 'react-navigation';
import { connect } from 'react-redux'
import { authLogIn } from '../store'
import { RootStack } from './Navigator'
import { Container, Header, Content, Item, Input, Text, Left, Right, Button, Form, Icon } from 'native-base'
import { styles } from '../assets/styles/StyleSheet'

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
      <Header style={styles.Header} >
        <Left />
        <Right />
      </Header>
      <Content>
        <Text style={styles.signInText}>Log In!</Text>
        <Form style={{ margin: 15 }}>
          <Item regular style={styles.signInInput}>
            <Input
              placeholder='User Name' value={this.state.name}
              onChangeText={(value) => {
                this.setState({ name: value })
              }
              } />
          </Item>
          <Item regular style={styles.signInInput}>
            <Input
              placeholder='Password' value={this.state.password}
              onChangeText={(value) => this.setState({ password: value })
              } />
          </Item>
        </Form>
        <Button transparent info style={styles.signInButton} onPress={() => this.props.navigation.navigate('SignUp')}><Text>Don't have an account? Sign up!</Text></Button>
        <Button style={styles.signInButton} rounded onPress={this.props.handleLogIn.bind(this, this.state.name, this.state.password)}>
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>)
  }

}


const mapDispatch = (dispatch) => {

  return {
    handleLogIn(name, password) {
      dispatch(authLogIn(name, password, 'login'))
      this.props.navigation.navigate('Profile')
    }
  }
}


export default connect(null, mapDispatch)(LogIn)

