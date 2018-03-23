import React, { Component } from 'react';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { Container, Header, Content, Item, Input, Text, Left, Right, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { authSignUp } from '../store'
import { styles } from '../assets/styles/StyleSheet'

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
          <Text style={styles.signInText}>Your adventure awaits...</Text>
          <Text style={styles.signInText}>Sign up!</Text>
          <Item regular style={styles.signInInput}>
            <Input placeholder='First Name' value={this.state.firstName}
              onChangeText={(value) => {
                this.setState({ firstName: value })
              }} />
          </Item>
          <Item regular style={styles.signInInput}>
            <Input placeholder='Last Name' value={this.state.lastName}
              onChangeText={(value) => this.setState({ lastName: value })
              } />
          </Item>
          <Item regular style={styles.signInInput}>
            <Input placeholder='User Name' value={this.state.userName}
              onChangeText={(value) => this.setState({ userName: value })
              } />
          </Item>
          <Item regular style={styles.signInInput}>
            <Input placeholder='Email' value={this.state.email}
              onChangeText={(value) => this.setState({ email: value })
              } />
          </Item>
          <Item regular style={styles.signInInput}>
            <Input placeholder='Password' value={this.state.password}
              onChangeText={(value) => this.setState({ password: value })
              } />
          </Item>
          <Button rounded style={styles.signInButton} onPress={this.props.handleSignUp.bind(this, this.state)}>
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

export default connect(null, mapDispatch)(SignUp)
