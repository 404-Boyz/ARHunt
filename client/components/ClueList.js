import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Card, CardItem, Body, Header, Left, Icon, Right, Button, Content, Text, Title, Thumbnail, ActionSheet } from 'native-base';
import { getAllLocations } from '../store';
import { styles } from '../assets/styles/StyleSheet';
import { TouchableOpacity, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, navigationOptions } from 'react-navigation';
import geolib from 'geolib';

const BUTTONS = ["Hint #1", "Hint #2", "Cancel"];
const CANCEL_INDEX = 2;


class ClueList extends Component {


  constructor(props) {
    super(props)

    this.state = {
      distToNext: null,
      clue: this.props.allClues.find(loc => loc.visited === false)
    }
  }

  componentDidMount() {
    this.props.fetchLocations(1, 1);
    setInterval(() => {
      this.setState({ distToNext: geolib.getDistance(this.props.geoPosition, {latitude: this.state.clue.latitude, longitude: this.state.clue.longitude}) });
    }, 3000);
  }

  render() {

    const activeAdventures = this.props.adventures.filter(adv => adv.status === 'active');
    if (activeAdventures.length) {
      return this.props.allClues.length ? (
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
            {this.props.allClues.sort((a, b) => {
              return a.positionInHunt - b.positionInHunt
            }).map(location => {
              return (
                location.visited ?
                  <Card key={location.id}>
                    <CardItem style={styles.CardHeadFoot}>
                      <Text style={styles.CardTitle}>{activeAdventures[0].name}: Clue {location.positionInHunt}</Text>
                    </CardItem>
                    <CardItem style={styles.CardBody}>
                      <Body>
                        <Text style={styles.CardText}>
                          {location.clue}
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem style={styles.clueListFooter}>
                      <Text style={styles.CardHunts}>Distance to clue number {(this.state.clue.positionInHunt) - 1}: {this.state.distToNext ? `${this.state.distToNext * 3} feet` : `Calculating...`}</Text>
                      <View style={styles.hintArea}>
                      <Ionicons name="ios-help-circle" size={32} color="#09b9b8" />
                      <Text
                        onPress={() =>
                          ActionSheet.show(
                            {
                              options: BUTTONS,
                              cancelButtonIndex: CANCEL_INDEX,
                              title: `Clue #${location.positionInHunt} Hints`
                            },
                            buttonIndex => {
                              this.setState({ clicked: BUTTONS[buttonIndex] }, () => {
                                if (this.state.clicked === 'Cancel') return
                                Alert.alert(
                                  `${this.state.clicked}`,
                                  `${location.hints[(+this.state.clicked.slice(-1)) - 1]}`,
                                  [
                                    { text: 'Got it!', onPress: () => console.log('Saw Hint') }
                                  ],
                                  { cancelable: false }
                                )
                              });
                            }
                          )}
                        style={styles.CardHunts}> Stuck? Get A Hint! </Text>
                    </View>
                    </CardItem>
                  </Card>
                  :
                  <Card key={location.id} >
                    <CardItem style={styles.CardHeadFoot}>
                      <Text style={styles.CardTitle}>{activeAdventures[0].name}: Clue {location.positionInHunt}</Text>
                    </CardItem>
                    <CardItem style={styles.CardBody}>
                      <Body>

                        <Text style={styles.CardText}>
                          Complete your current clue to continue!
                  </Text>
                      </Body>
                    </CardItem>
                    <CardItem style={styles.clueListFooter}>

                    </CardItem>
                  </Card>
              )
            }
            )}
          </Content>
        </Container>
      ) : null;
    } else {
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
        <TouchableOpacity onPress={() => this.props.navigation.navigate("ADVENTURES")}>
            <Card style={styles.Card}>
              <CardItem style={styles.CardHead}>
                <Left>
                  <Thumbnail source={require('../assets/img/SA-thumb.png')} />
                  <Body>
                    <Text>You Have No Adventures!!</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={styles.CardBody}>
              <Body>
              <Text> Choose a new adventure to see the clues! </Text>
            </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
          </Content>
          </Container>
      )
    }

  }
}


const mapState = (state) => {
  return {
    adventures: state.adventure,
    geoPosition: state.geoPosition,
    allClues: state.location
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchLocations: (user, adv) => {
      dispatch(getAllLocations(user, adv))
    },
  }
}

export default connect(mapState, mapDispatch)(ClueList);
