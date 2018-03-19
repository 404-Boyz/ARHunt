import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';

export default class ARModal extends Component {
  constructor(props) {
    super(props)
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