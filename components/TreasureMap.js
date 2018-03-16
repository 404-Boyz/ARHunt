import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { MapView, Marker } from 'expo';

export default class TreasureMap extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 41.895266,
          longitude: -87.639035,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>
    );
  }
}

const testMarker = {
  coordinate: {
    latitude: 41.895266,
    longitude: -87.639035,
  },
  title: 'Fullstack Academy',
  description: 'Home Sweet Home'
}
