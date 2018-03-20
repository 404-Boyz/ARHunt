import React, { Component } from 'react';
import { Container, Header, Left, Icon, Right, Button, Content, Text } from 'native-base';
import { StackNavigator, navigationOptions } from 'react-navigation';


export default class ChooseAdv extends Component {
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
          <Text>Choose Your Adventure!</Text>
          <Button title='Hit me' onPress={() => this.props.navigation.navigate('Home')} />
        </Content>
      </Container>
    )
  }
}
