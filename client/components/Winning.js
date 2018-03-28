import React from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { changeAdventureStatus } from '../store';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Image, ImageBackground, Alert } from 'react-native';
import { styles } from '../assets/styles/StyleSheet'
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo'
import Counter from 'react-native-counter'

class Winning extends React.Component {
  constructor(props) {
    super(props)

  }

  winningScreenAudio = async () => {
    const source = require("../assets/audio/410578__yummie__game-win-screen-background-music.mp3")
    const sound = new Audio.Sound();
    try {
      await Audio.setIsEnabledAsync(true);
      await sound.loadAsync(source);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.winningScreenAudio();
  }
  render() {

    const adventure = this.props.adventures.filter(adv => adv.status === 'active')[0];
    const user = this.props.user;
    const winData = this.props.locations.find(location => location.name === 'WINNER')
    const completedAdventures = this.props.adventures.filter(adv => adv.status === 'inactive');
    console.log('ADVENTURE!!!!!', adventure)

    return (
      <Container style={styles.Container}>
        <Header style={styles.Header} iosBarStyle="light-content">
          <Left />
          <Body>
            <Title style={styles.title}>Winner!</Title>
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
            <Text style={styles.profileName}>Congratulations {user.firstName}!</Text>
            <Text style={styles.profilePoints}>You earned <Counter end={975} start={0} time={5000} digits={0} easing="linear" style={styles.profilePoints} /> Points!!!
            </Text>
          </ImageBackground>
          <Card style={styles.Card}>
            <CardItem style={styles.CardHeadFoot}>
              <Left>
                <Thumbnail source={require('../assets/img/SA-thumb.png')} />
                <Body>
                  <Text style={styles.CardTitle}>
                    <Ionicons name={'ios-checkmark-circle'} size={22} color="#09b9b8" /> {adventure.name}
                  </Text>
                  <Text note style={styles.CardNote}>Completed!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.CardBody}>
              <Body>
                <Image source={{ uri: `${adventure.photoUrl}` }} style={{ height: 200, width: '100%', flex: 1 }} />
                <Text style={styles.CardText}>
                  {winData.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.CardHeadFoot}>
              <Left>
                <Ionicons name="md-heart" size={22} color="#09b9b8" />
                {(completedAdventures.length === 1)
                  ?
                  <Text style={styles.CardHunts}>{completedAdventures.length} Hunt Completed</Text>
                  :
                  <Text style={styles.CardHunts}>{completedAdventures.length} Hunts Completed</Text>}
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const mapState = (state) => {
  return {
    adventures: state.adventure,
    user: state.authUser,
    locations: state.location
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeStatus: () => {
      dispatch(changeAdventureStatus(1, 1, status))
    }
  }
}


export default connect(mapState, mapDispatch)(Winning);
