import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { Container, Content, CardItem, Card, Header, Button, Body } from 'native-base';
import { connect } from 'react-redux';
import { fetchActiveLocation, changeVisitedStatus } from '../store';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'
import { styles } from '../assets/styles/StyleSheet'

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
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(44,48,57,0.8)'}} >
            <View style={{
              width: 300,
              height: 500,
              borderRadius: 10,
              backgroundColor: '#dfdce3'}} >
              <Text>Clue # {this.clue.positionInHunt}</Text>
              <Text>{this.clue.clue}</Text>
                <Button>
                  <TouchableHighlight
                    onPress={() => {
                      // this.props.setModalVisible(false);
                      this.props.navigation.navigate('MAP')
                    }}>
                    <Text>  Continue To Next Location  </Text>
                  </TouchableHighlight>
                </Button>
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
