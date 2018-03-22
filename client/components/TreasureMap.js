import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Icon, Right, Button, Content, Text } from 'native-base';
import { MapView, Location } from 'expo';
import geolib from 'geolib';
import {}  from '../store'

export default class TreasureMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      nextPosition: {
        latitude: 0,
        longitude: 0,
      },
      distToNext: 0,
      isInside: false,
      markers: []
    }

    let locationFinder;
  }


  async componentDidMount() {
    locationFinder = await Location.watchPositionAsync({ enableHighAccuracy: true, distanceInterval: 1 },
      (position) => {

        this.setState({ currentPosition: { latitude: position.coords.latitude, longitude: position.coords.longitude } });
        this.setState({ distToNext: geolib.getDistance(this.state.currentPosition, this.state.nextPosition) });
        this.setState({ isInside: geolib.isPointInCircle(this.state.currentPosition, this.state.nextPosition, 15) });
        console.log(this.state.currentPosition);
      })
  }

  componentWillUnmount() {
    locationFinder.remove();
  }

  render() {
    return !this.state.isInside ? (
      <Container>
        <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }} >
          <Left />
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>


        <MapView
          style={{ flex: 10 }}
          showsUserLocation={true}
          initialRegion={initialRegion}
        >
          <MapView.Marker
            coordinate={testMarker.coordinate}
            title="FullStack"
            description="Our school"
          />
        </MapView>
        <Text style={{ flex: 1, textAlign: 'center' }}>Distance to next clue: {this.state.distToNext} meters</Text>


      </Container>
    ) : (<View>{this.props.navigation.navigate('AR')}</View>)
  }
}

const initialRegion = {
  latitude: 41.895266,
  longitude: -87.639035,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};



const testMarker = {
  coordinate: {
    latitude: 41.895266,
    longitude: -87.639035,
  },
  title: 'Fullstack Academy',
  description: 'Home Sweet Home'
}
