import React from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { getAllAdventures, getCurrentPosition, stopTracking } from '../store';
import { connect } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from '../assets/styles/StyleSheet'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }


  render() {
    const adventures = this.props.adventures;
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
        <Content padder style={styles.Content}>
          {adventures.filter(adventure => adventure.status === 'active').map(adventure => {
            return (
              <TouchableOpacity key={adventure.id} onPress={() => console.log("PRESSED")}>
                <Card style={styles.Card}>
                  <CardItem style={styles.CardHead}>
                    <Left>
                      <Thumbnail source={require('../assets/img/SA-thumb.png')} />
                      <Body>
                        <Text>{adventure.name}</Text>
                        <Text note>DO SOMETHING LATER</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem style={styles.CardBody}>
                    <Body>
                      <Image source={{ uri: `${adventure.photoUrl}` }} style={{ height: 200, width: '100%', flex: 1 }} />
                      <Text>
                        {adventure.description}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem style={styles.CardBody}>
                    <Left>
                      <Button transparent textStyle={{ color: '#87838B' }}>
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
    adventures: state.adventure,
    geoPosition: state.geoPosition
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchInitialData: () => {
      dispatch(getCurrentPosition());
      dispatch(getAllAdventures());
    }
  }
}


export default connect(mapState, mapDispatch)(Profile);
