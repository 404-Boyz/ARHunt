import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { MapView, Location } from 'expo';

export default class TreasureMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: {
        latitude: 0,
        longitude: 0
      },
      locationFinder: {}
    }
  }

  
  componentDidMount() {
   const locationFinder = Location.watchPositionAsync({enableHighAccuracy:true, distanceInterval: 1}, (position)=> {this.setState({position: {latitude: position.coords.latitude, longitude: position.coords.longitude}}); console.log(this.state.position)})
   this.setState({locationFinder})
  }

  componentWillUnmount() {
  this.state.locationFinder.remove();
  }

  render() {
    console.log(this.state.locationFinder);
    return (
      <MapView
        style={{ flex: 1 }}
       showsUserLocation={true}
        initialRegion={{
          latitude: 41.895266,
          longitude: -87.639035,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <MapView.Marker
        coordinate={testMarker.coordinate}
        title="FullStack"
        description="Our school"
      />
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
