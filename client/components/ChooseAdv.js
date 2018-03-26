import React, { Component } from 'react';
import { Image, TouchableOpacity, Alert } from 'react-native';
import { getAllAdventures, getAllLocations } from '../store';
import { connect } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { styles } from '../assets/styles/StyleSheet'
import { Ionicons } from '@expo/vector-icons';

class ChooseAdv extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAdventures();
  }

  render() {
    const user = this.props.user
    const adventures = this.props.adventures;
    return (
      <Container style={styles.Container}>
        <Header style={styles.Header} iosBarStyle="light-content">
          <Left />
          <Body>
            <Title style={styles.title}>ADVENTURES</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={styles.title} name="menu" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          {adventures.map(adventure => {
            return (
              <TouchableOpacity key={adventure.id} onPress={() => {
                this.props.getLocations(user.id, adventure.id);
                Alert.alert(
                  'AR you ready to begin?',
                  `Starting ${adventure.name}`,
                  [
                    { text: 'Begin!', onPress: () => { this.props.navigation.navigate('CAMERA') } },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed') }
                  ],
                  { cancelable: false }
                )
              }}>
                <Card style={styles.Card}>
                  <CardItem style={styles.CardHeadFoot}>
                    <Left>
                      <Thumbnail source={{ uri: `${adventure.photoUrl}` }} />
                      <Body>
                        <Text style={styles.CardTitle}>{adventure.name}</Text>
                        <Text note style={styles.CardNote}>Chicago, Il</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem style={styles.CardBody}>
                    <Body>
                      <Image source={{ uri: `${adventure.photoUrl}` }} style={{ height: 200, width: '100%', flex: 1 }} />
                      <Text style={styles.CardText}>
                        {adventure.description}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem style={styles.CardHeadFoot}>
                    <Left>
                      <Ionicons name="md-heart" size={22} color="#09b9b8" />
                      <Text style={styles.CardHunts}>1,926 Hunts Completed</Text>
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
    adventures: state.adventure,
    user: state.authUser
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAdventures: () => {
      dispatch(getAllAdventures())
    },
    getLocations: (userId, adventureId) => {
      dispatch((getAllLocations(userId, adventureId)))
    }
  }
}


export default connect(mapState, mapDispatch)(ChooseAdv);
