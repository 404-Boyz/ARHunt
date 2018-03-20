import React, { Component } from 'react';

import { Container, Card, CardItem, Body, Header, Left, Icon, Right, Button, Content, Text } from 'native-base';

import { StackNavigator, navigationOptions } from 'react-navigation';

export default class ClueList extends Component {
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
          <Card>
            <CardItem header>
              <Text>Chicago Highrise Adventure: Clue 1</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Some might say it's the tallest building in the world... some might say that's incorrect. Whichever way you look at it, you're going to be looking straight up.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer style={{display: 'flex', justifyContent: 'space-between'}}>
              <Text>Distance To Go: 86m</Text>
              <Button bordered danger>
                <Text style={{paddingLeft: 10, paddingRight: 10}}> Stuck? Get A Hint! </Text>
              </Button>
            </CardItem>
         </Card>
        <Card>
          <CardItem header>
            <Text>Chicago Highrise Adventure: Clue 2</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                UNLOCK CLUE 1 TO CONTINUE
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text></Text>
          </CardItem>
       </Card>
      </Content>
      </Container>
    )
  }
}
