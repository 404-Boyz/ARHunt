import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { fetchActiveLocation, changeVisitedStatus } from '../store';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'
import { styles } from '../assets/styles/StyleSheet'
import { Ionicons } from '@expo/vector-icons';

class ARModal extends Component {
  constructor(props) {
    super(props)
  }

  render(props) {

    if (this.clue === undefined) {
      console.log('NEW CLUE???????????', this.clue, this.props.clue)
      this.clue = this.props.clue
    }


    return (
      <Modal
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInner}>
            <Text style={styles.modalTitle}>CLUE #{this.clue.positionInHunt}</Text>
            <Text style={styles.modalText}>{this.clue.clue}</Text>
            <TouchableHighlight
              style={styles.modalButton}
              onPress={() => {
                // this.props.setModalVisible(false);
                this.props.navigation.navigate('MAP')
              }}>
              <Text style={styles.modalBT}>   On To The Next Clue!    </Text>
            </TouchableHighlight>
            <View style={styles.hintArea}>
              <Ionicons name="ios-help-circle" size={32} color="#09b9b8" />
              <Text style={styles.CardHunts}> Stuck? Get A Hint! </Text>
            </View>
          </View>
        </View>
      </Modal >
    )
  }
}

const mapState = (state) => {
  return {
    geoPosition: state.geoPosition,
    currentClue: state.location,
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

export default connect(mapState, mapDispatch)(ARModal);
