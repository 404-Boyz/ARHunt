import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { Button, Container, Header, Content, Card, CardItem, Body } from 'native-base'

export default class ARModal extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <Container>
        <Header />
        <Modal
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <Content>
            <Card>
              <CardItem header>
                <Text>Clue Title</Text>
              </CardItem>
              <View style={{ marginTop: 22 }}>
              <View>
                <CardItem>
                  <Body>
                    <Text>
                      Clue Text
                    </Text>
                  </Body>
                  </CardItem>
                  <CardItem footer>
                  <Button rounded>
                    <TouchableHighlight
                      onPress={() => {
                        this.props.setModalVisible(false);
                      }}>
                      <Text>  Close Clue  </Text>
                    </TouchableHighlight>
                  </Button>
                  </CardItem>
                  </View>
                </View>
            </Card>
          </Content>
        </Modal>
      </Container>
    )
  }
}
