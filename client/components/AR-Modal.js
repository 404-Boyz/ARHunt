import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { changeVisitedStatus, fetchActiveLocation } from '../store';

class ARModal extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    //fire change status to visited true
    await this.props.changeStatus(1, 1, this.props.currentLocation.id, true)
    // fire new Active location
    this.props.getActive(1, 1)
    // on modal close, send to maps.
  }
  render(props) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(false);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }
}

const mapState = (state) => {
  return {
      currentLocation: state.location
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeStatus: (user, adventure, location, status) => {
      dispatch(changeVisitedStatus(user, adventure, location, status))
    },
    getActive: (user, adv) => {
      dispatch(fetchActiveLocation(user, adv))
    }
  }
}

export default connect(mapState, mapDispatch)(ARModal);