import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Icon, Right, Button, Content, Text } from 'native-base';
import { RootStack } from './Navigator.js'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <Container>
        <Header style={{ backgroundColor: 'transparent', borderBottomWidth: '0px' }} >
          <Left />
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content padder>

          <Text>Welcome Jimmy!</Text>


          <Button title='Augmented Reality' onPress={() => this.props.navigation.navigate('AR')} />
          <Button title='Choose Adventure' onPress={() => this.props.navigation.navigate('ChooseAdv')} />
          <Button title='Clue List' onPress={() => this.props.navigation.navigate('ClueList')} />
          <Button title='Log In' onPress={() => this.props.navigation.navigate('Login')} />
          <Button title='Map' onPress={() => this.props.navigation.navigate('TreasureMap')} />
          <Button title='Profile' onPress={() => this.props.navigation.navigate('Profile')} />
          <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')} />
        </Content>
      </Container>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Home)
