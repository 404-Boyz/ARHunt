import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Card, CardItem, Body, Header, Left, Icon, Right, Button, Content, Text, Title } from 'native-base';
import { getAllLocations } from '../store';
import geolib from 'geolib';
import { styles } from '../assets/styles/StyleSheet';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, navigationOptions } from 'react-navigation';


class ClueList extends Component {


  constructor(props) {
    super(props)

    this.state = {
      distToNext: 0
    }
  }

  componentDidMount() {
    this.props.fetchLocations(1, 1);
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
          {this.props.allClues.sort((a, b) => {
            return a.positionInHunt - b.positionInHunt
          }).map(location => {
            return (
              location.visited ?

                <Card key={location.id}>
                  <CardItem style={styles.CardHeadFoot}>
                    <Text style={styles.CardTitle}>{this.props.adventures[0].name}: Clue {location.positionInHunt}</Text>
                  </CardItem>
                  <CardItem style={styles.CardBody}>
                    <Body>
                      <Text style={styles.CardText}>
                        {location.clue}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem style={styles.clueListFooter}>
                    <Text style={styles.CardHunts}>Distance To Go: 86m</Text>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
                      <Ionicons name="ios-help-circle" size={32} color="#09b9b8" />
                      <Text style={styles.CardHunts}> Stuck? Get A Hint! </Text>
                    </TouchableOpacity>
                  </CardItem>
                </Card>
                :
                <Card key={location.id} >
                  <CardItem style={styles.CardHeadFoot}>
                    <Text style={styles.CardTitle}>{this.props.adventures[0].name}: Clue {location.positionInHunt}</Text>
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
    )
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
