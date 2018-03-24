import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native'
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
    return (<Container style={styles.Container}>
      <Header style={styles.HeaderLogin} iosBarStyle="light-content">
        <Left />
        <Right />
      </Header>
      <Content>
        <View style={styles.imageContainer}>
          <Image style={styles.mainLogo} source={require('../assets/img/scavengAR-logo.png')} />
        </View>
        <Form>
          <Item rounded style={styles.signInInput}>
            <Input
              style={styles.input}
              placeholder='User Name' value={this.state.name}
              placeholderTextColor="#4B5059"
              onChangeText={(value) => {
                this.setState({ name: value })
              }
              } />
          </Item>
          <Item rounded style={styles.signInInput}>
            <Input
              style={styles.input}
              placeholder='Password' value={this.state.password}
              placeholderTextColor="#4B5059"
              secureTextEntry={true}
              onChangeText={(value) => this.setState({ password: value })
              } />
          </Item>
        </Form>
        <Button style={styles.signInButton} rounded onPress={this.props.handleLogIn.bind(this, this.state.name, this.state.password)}>
          <Text>                            Login                                  </Text>
        </Button>
        <View style={styles.signUpTextContainer}>
          <Button transparent info onPress={() => this.props.navigation.navigate('SignUp')}><Text style={styles.signUpText}>Don't have an account? Sign up!</Text></Button>
        </View>
      </Content>
    </Container>)
  }

}


const mapDispatch = (dispatch) => {

  return {
    handleLogIn(name, password) {
      dispatch(authLogIn(name, password, 'login'))
      this.props.navigation.navigate('MY PROFILE')
    }
  }
}


export default connect(null, mapDispatch)(LogIn)

