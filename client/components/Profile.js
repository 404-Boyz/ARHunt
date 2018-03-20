import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { getAllAdventures } from '../store';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount () {
    this.props.fetchAdventures();
  }


  render() {
    console.log("PROPS", this.props, this.state)
    return (
      <View>
        <Text>Profile!</Text>
        <Button title='Hit me' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}

const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAdventures: () => {
      dispatch(getAllAdventures())
    }
  }
}


export default connect(mapState, mapDispatch)(Profile);
