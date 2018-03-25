import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Icon, Right, Button, Text, Title, Body } from 'native-base';
import { MapView, Location } from 'expo';
import geolib from 'geolib';
import { styles } from '../assets/styles/StyleSheet'
import { connect } from 'react-redux';
import { fetchActiveLocation } from '../store';


class TreasureMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      nextPosition: {
        latitude: 41.895544,
        longitude: -87.639980,
      },
      distToNext: 0,
      isInside: false,
      markers: []
    }

    // let locationFinder;
  }


  async componentDidMount() {
    await this.props.getActive(this.props.user, 1);
    this.locationFinder = await Location.watchPositionAsync({ enableHighAccuracy: true, distanceInterval: 1 },
      (position) => {

        this.setState({ currentPosition: { latitude: position.coords.latitude, longitude: position.coords.longitude } });
        this.setState({ distToNext: geolib.getDistance(this.state.currentPosition, this.state.nextPosition) });
        this.setState({ isInside: geolib.isPointInCircle(this.state.currentPosition, this.state.nextPosition, 15) });

      })
  }

  componentWillUnmount() {
    this.locationFinder.remove();
  }

  render() {
    console.log('current clue///////////', this.props.currentClue)

    return !this.state.isInside ? (
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
          initialRegion={initialRegion}
        >
        <MapView.Circle
          center={testMarker.coordinate}
          radius={300}
          strokeColor="rgba(16,187,186, .2)"
          fillColor="rgba(16,187,186, .2)"
      />
        </MapView>
        <Text style={styles.mapText}>Distance to next clue: {this.state.distToNext} meters</Text>


      </Container>
    ) : (<View>{this.props.navigation.navigate('AR')}</View>)
  }
}

const initialRegion = {
  latitude: 41.895266,
  longitude: -87.639035,
  latitudeDelta: 0.008,
  longitudeDelta: 0.008,
};

const testMarker = {
  coordinate: {
    latitude: 41.895544,
    longitude: -87.639980,
  },
  title: 'Fullstack Academy',
  description: 'Home Sweet Home'
}


const mapState = (state) => {
  return {
    currentClue: state.location,
    adventures: state.adventure,
    geoPosition: state.geoPosition,
    user: state.authUser
  }
}

const mapDispatch = (dispatch) => {
  return {
    getActive: (user, adv) => {
      dispatch(fetchActiveLocation(user, adv))
    }
  }
}

export default connect(mapState, mapDispatch)(TreasureMap);
