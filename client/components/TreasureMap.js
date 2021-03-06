import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Icon, Right, Button, Text, Title, Body } from 'native-base';
import { MapView, Location } from 'expo';
import geolib from 'geolib';
import { styles } from '../assets/styles/StyleSheet'
import { connect } from 'react-redux';
import { changeVisitedStatus } from '../store';


class TreasureMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distToNext: null,
      clue: this.props.locations.find(loc => loc.visited === false)
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ distToNext: geolib.getDistance(this.props.geoPosition, { latitude: this.state.clue.latitude, longitude: this.state.clue.longitude }) });
    }, 3000);
  }

  render() {
    console.log(this.state.distToNext)
    return (
      <Container style={styles.Container}>
        <Header style={styles.Header} iosBarStyle="light-content">
          <Left />
          <Body>
            <Title style={styles.title}>MAP</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={styles.title} name="menu" />
            </Button>
          </Right>
        </Header>


        <MapView
          style={{ flex: 10 }}
          showsUserLocation={true}
          initialRegion={
            {
              latitude: this.props.geoPosition.latitude,
              longitude: this.props.geoPosition.longitude,
              latitudeDelta: 0.009,
              longitudeDelta: 0.009
            }
          }
        >
          <MapView.Circle
            center={{ latitude: +this.state.clue.latitude, longitude: +this.state.clue.longitude }}
            radius={300}
            strokeColor="rgba(16,187,186, .2)"
            fillColor="rgba(16,187,186, .2)"
          />
        </MapView>
        <Text style={styles.mapText}>Distance to clue number {(this.state.clue.positionInHunt) - 1}: {this.state.distToNext ? `${this.state.distToNext * 3} feet` : `Calculating...`}</Text>

        {this.state.distToNext > 20 || typeof this.state.distToNext !== 'number' ? null : this.props.navigation.navigate('CAMERA')}

      </Container>
    )
  }
}



const mapState = (state) => {
  return {
    locations: state.location,
    adventures: state.adventure,
    geoPosition: state.geoPosition,
    user: state.authUser
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeStatus: (user, adventure, location) => {
      dispatch(changeVisitedStatus(user, adventure, location))
    },
  }
}

export default connect(mapState, mapDispatch)(TreasureMap);
