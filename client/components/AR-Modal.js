import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { changeVisitedStatus, fetchActiveLocation } from '../store';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'
import { Button, Container, Header, Content, Card, CardItem, Body } from 'native-base'

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
      <Container>
        <Header />
        <Content>
          <Card>
            <Modal
              animationType="slide"
              transparent={false}>
              <CardItem header>
                <Text>GOOD WORK - YOU FOUND IT!</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Next Clue
                </Text>
                <Text></Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Button>
                  <TouchableHighlight
                    onPress={() => {
                      // this.props.setModalVisible(false);
                      this.props.navigation.navigate('TreasureMap')
                    }}>
                    <Text>  Continue To Next Location  </Text>
                  </TouchableHighlight>
                </Button>
              </CardItem>
            </Modal>
          </Card>
        </Content>
      </Container>
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
      console.log('NEW ACTIVE LOCATION!')
      dispatch(fetchActiveLocation(user, adv))
    }
  }
}

export default connect(mapState, mapDispatch)(ARModal);
