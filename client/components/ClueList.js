import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Container, Card, CardItem, Body, Header, Left, Icon, Right, Button, Content, Text, Title } from 'native-base';
import { getAllLocations } from '../store';
import geolib from 'geolib';

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
      <Container>
        <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }} >
          <Left />
          <Body>
            <Title>Clue List</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
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
              <CardItem  header>
                <Text>{this.props.adventures[0].name}: Clue {location.positionInHunt}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {location.clue}
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer style={{display: 'flex', justifyContent: 'center'}}>
                <Button bordered danger>
                  <Text style={{paddingLeft: 10, paddingRight: 10}}> Stuck? Get A Hint! </Text>
                </Button>
              </CardItem>
            </Card>
            :
            <Card key={location.id} >
            <CardItem  header>
              <Text>{this.props.adventures[0].name}: Clue {location.positionInHunt}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Complete your current clue to continue!
                </Text>
              </Body>
            </CardItem>
            <CardItem footer style={{display: 'flex', justifyContent: 'space-between'}}>
            </CardItem>
          </Card>
          )}
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
