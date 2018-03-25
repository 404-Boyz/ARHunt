import React, { Component } from 'react';

import { Container, Card, CardItem, Body, Header, Left, Icon, Right, Button, Content, Text, Title } from 'native-base';
import { styles } from '../assets/styles/StyleSheet';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, navigationOptions } from 'react-navigation';

export default class ClueList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container style={styles.Container}>

        <Header style={styles.Header} iosBarStyle="light-content" >
          <Left />
          <Body>
            <Title style={styles.title}>Clue List</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" style={styles.title} />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem style={styles.CardHeadFoot}>
              <Text style={styles.CardTitle}>Chicago Highrise Adventure: Clue 1</Text>
            </CardItem>
            <CardItem style={styles.CardBody}>
              <Body>
                <Text style={styles.CardText}>
                  Some might say it's the tallest building in the world... some might say that's incorrect. Whichever way you look at it, you're going to be looking straight up.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.clueListFooter}>
              <Text style={styles.CardHunts}>Distance To Go: 86m</Text>
              <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
              <Ionicons name="ios-help-circle" size={32} color="#09b9b8" />
              <Text style={styles.CardHunts}> Stuck? Get A Hint! </Text>
              </TouchableOpacity>
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
