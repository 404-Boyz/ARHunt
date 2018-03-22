import React, { Component } from 'react';
import { Image, TouchableOpacity, Alert } from 'react-native';
import { getAllAdventures, fetchActiveLocation } from '../store';
import { connect } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { styles } from '../assets/styles/StyleSheet'

class ChooseAdv extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAdventures();
  }

  render() {
    const adventures = this.props.adventures;
    return (
      <Container>
        <Header style={styles.Header} >
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
          {adventures.map(adventure => {
            return (
              <TouchableOpacity key={adventure.id} onPress={() => {
                this.props.getActive(1, 1)
                Alert.alert(
                  'AR you ready to begin?',
                  `Hit ok to start ${adventure.name}`,
                  [
                    { text: 'Begin!', onPress: () => { this.props.navigation.navigate('AR') } },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed') }
                  ],
                  { cancelable: false }
                )
              }}>
                <Card style={styles.Card}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: `${adventure.photoUrl}` }} />
                      <Body>
                        <Text>{adventure.name}</Text>
                        <Text note>{adventure.location}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{ uri: `${adventure.photoUrl}` }} style={{ height: 200, width: '100%', flex: 1 }} />
                      <Text>
                        {adventure.description}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent info>
                        <Text>1,926 Hunts Completed</Text>
                      </Button>
                    </Left>
                  </CardItem>
                </Card>
              </TouchableOpacity>
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
    adventures: state.adventure
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAdventures: () => {
      dispatch(getAllAdventures())
    },
    getActive: (user, adv) => {
      dispatch(fetchActiveLocation(user, adv))
    }
  }
}


export default connect(mapState, mapDispatch)(ChooseAdv);
