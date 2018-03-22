import React, { Component } from 'react';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { Container, Header, Content, Item, Input, Text, Left, Right, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { authSignUp } from '../store'
import { StyleSheet } from 'react-native'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }} >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Right />
        </Header>
        <Content>
          <Text style={styles.text}>Your adventure awaits...</Text>
          <Text style={styles.text}>Sign up!</Text>
          <Item regular style={styles.input}>
            <Input placeholder='First Name' value={this.state.firstName}
              onChangeText={(value) => {
                console.log('first name: ', this.state.firstName)
                this.setState({ firstName: value })
              }} />
          </Item>
          <Item regular style={styles.input}>
            <Input placeholder='Last Name' value={this.state.lastName}
              onChangeText={(value) => this.setState({ lastName: value })
              } />
          </Item>
          <Item regular style={styles.input}>
            <Input placeholder='User Name' value={this.state.userName}
              onChangeText={(value) => this.setState({ userName: value })
              } />
          </Item>
          <Item regular style={styles.input}>
            <Input placeholder='Email' value={this.state.email}
              onChangeText={(value) => this.setState({ email: value })
              } />
          </Item>
          <Item regular style={styles.input}>
            <Input placeholder='Password' value={this.state.password}
              onChangeText={(value) => this.setState({ password: value })
              } />
          </Item>
          <Button rounded style={styles.button} onPress={this.props.handleSignUp.bind(this, this.state)}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapDispatch = (dispatch) => {

  return {
    handleSignUp(info) {
      console.log(info);
      dispatch(authSignUp(info, 'signup'))
      this.props.navigation.navigate('Profile')
    }
  }
}

const styles = new StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 30
  },
  input: {
    margin: 15,
    marginRight: 15,
    marginLeft: 15
  },
  button: {
    alignSelf: 'center'
  }
})

export default connect(null, mapDispatch)(SignUp)
