import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { MapView, Location } from 'expo';
import geolib from 'geolib';

export default class TreasureMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      nextPosition: {
        latitude: 41.786776,
        longitude: -87.752188
      },
      distToNext: 0
    }

    let locationFinder
  }


  async componentDidMount() {
    locationFinder = await Location.watchPositionAsync({ enableHighAccuracy: true, distanceInterval: 1 },
      (position) => {
        this.setState({ currentPosition: { latitude: position.coords.latitude, longitude: position.coords.longitude } });
        this.setState({ distToNext: geolib.getDistance(this.state.currentPosition, this.state.nextPosition) })
      })
  }

  componentWillUnmount() {
    locationFinder.remove();
  }

  render() {
    console.log(this.state.locationFinder);
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 6 }}
          showsUserLocation={true}
          initialRegion={initialRegion}
        >
          <MapView.Marker
            coordinate={testMarker.coordinate}
            title="FullStack"
            description="Our school"
          />
        </MapView>
        <Text style={{ flex: 1 }}>Distance to next clue: {this.state.distToNext}</Text>
      </View>
    );
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
