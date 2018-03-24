import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { Container, Content, CardItem, Card, Header, Button, Body } from 'native-base';
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
