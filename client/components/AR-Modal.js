import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { fetchActiveLocation } from '../store';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'

class ARModal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //fire new clue on load
    this.props.getActive(1, 1)
  }

  render(props) {
    console.log('NEW CLUE?', this.props.currentClue)
    return (
      <Modal
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>GOOD WORK - YOU FOUND IT!</Text>

            <TouchableHighlight
              onPress={() => {
                // this.props.setModalVisible(false);
                this.props.navigation.navigate('TreasureMap')
              }}>
              <Text>Continue To Next Clue</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }
}

const mapState = (state) => {
  return {
    geoPosition: state.geoPosition,
    currentClue: state.location
  }
}

const mapDispatch = (dispatch) => {
  return {
    getActive: (user, adv) => {
      dispatch(fetchActiveLocation(user, adv))
    }
  }
}

export default connect(mapState, mapDispatch)(ARModal);
