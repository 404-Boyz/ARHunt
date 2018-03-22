import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { StackNavigator, navigationOptions } from 'react-navigation';
import { connect } from 'react-redux'
import { authLogIn } from '../store'
import { RootStack } from './Navigator'
import { Container, Header, Content, Item, Input, Text, Left, Right, Button, Form, Icon } from 'native-base'

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
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Text style={styles.text}>Log In!</Text>
        <Form style={{ margin: 15 }}>
          <Item regular style={styles.input}>
            <Input
              placeholder='User Name' value={this.state.name}
              onChangeText={(value) => {
                this.setState({ name: value })
              }
              } />
          </Item>
          <Item regular style={styles.input}>
            <Input
              placeholder='Password' value={this.state.password}
              onChangeText={(value) => this.setState({ password: value })
              } />
          </Item>
        </Form>
        <Button transparent info style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}><Text>Don't have an account? Sign up!</Text></Button>
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

const styles = new StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 40
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
