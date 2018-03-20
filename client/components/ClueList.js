import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { Container, Content, Card, CardItem, Body, Button } from 'native-base';

export default class ClueList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container>

        <Content>
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
