import React from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { getAllAdventures, getCurrentPosition, stopTracking, getAllLocations } from '../store';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Image, ImageBackground, Alert } from 'react-native';
import { styles } from '../assets/styles/StyleSheet'
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo';

class Profile extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchInitialData();
  }

  beginAdventureAudio = async () => {

    const source = require("../assets/audio/269194__mickleness__game-start.mp3")
    const sound = new Audio.Sound();
    try {
      await Audio.setIsEnabledAsync(true);
      await sound.loadAsync(source);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }

  render() {

    const adventures = this.props.adventures.filter(adventure => adventure.status === 'active');
    const user = this.props.user;
    const activeClue = this.props.locations.find(location => location.visited === false)

    return (
      <Container style={styles.Container}>
        <Header style={styles.Header} iosBarStyle="light-content">
          <Left />
          <Body>
            <Title style={styles.title}>MY PROFILE</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={styles.title} name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <ImageBackground style={styles.profileHead} source={require('../assets/img/SA-pattern.png')}>
            <Thumbnail style={{ marginBottom: 10 }} large source={require('../assets/img/SA-thumb.png')} />
            <Text style={styles.profileName}>{user.fullName}</Text>
            <Text style={styles.profilePoints}>1,050 Points</Text>
          </ImageBackground>
          <View style={styles.Content}>
            {adventures.length
              ?
              adventures.map(adventure => {
                return (
                  <TouchableOpacity
                    key={adventure.id}
                    onPress={() => {
                      this.props.getLocations(1, adventure.id);
                      (activeClue.positionInHunt !== 1) ?
                        this.props.navigation.navigate('MAP')
                        :
                        Alert.alert(
                          'AR you ready to begin?',
                          `Starting ${adventure.name}`,
                          [
                            {
                              text: 'Begin!', onPress: async () => {
                                await this.beginAdventureAudio();
                                this.props.navigation.navigate('CAMERA')
                              }
                            },
                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed') }
                          ],
                          { cancelable: false }
                        )
                    }}>

                    <Card style={styles.Card}>
                      <CardItem style={styles.CardHeadFoot}>
                        <Left>
                          <Thumbnail source={require('../assets/img/SA-thumb.png')} />
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
              }) :
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ADVENTURES")}>
                <Card style={styles.Card}>
                  <CardItem style={styles.CardHead}>
                    <Left>
                      <Thumbnail source={require('../assets/img/SA-thumb.png')} />
                      <Body>
                        <Text>You Have No Adventures</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem style={styles.CardBody}>
                    <Body>
                      <Text> Choose a new adventure! </Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>}
          </View>
        </Content>
      </Container>
    )
  }
}

const mapState = (state) => {
  return {
    adventures: state.adventure,
    geoPosition: state.geoPosition,
    user: state.authUser,
    locations: state.location
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchInitialData: () => {
      dispatch(getCurrentPosition());
      dispatch(getAllAdventures());
      dispatch(getAllLocations(1, 1))
    },
    getLocations: () => {
      dispatch(getAllLocations(1, 1))
    }
  }
}


export default connect(mapState, mapDispatch)(Profile);
