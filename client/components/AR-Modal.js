import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { Container, Content, CardItem, Card, Header, Button, Body } from 'native-base';
import { connect } from 'react-redux';
import { fetchActiveLocation } from '../store';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'
import { styles } from '../assets/styles/StyleSheet'

export const ARModal = (props) => {
  return (
    <Container style={styles.Container}>
      <Header style={styles.Header} iosBarStyle="light-content" />
      <Content>
        <Card>
          <Modal
            animationType="slide"
            transparent={false}>
            <CardItem header>
              <Text>Oh. Hello there.</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  You got it! High Five! No rest for the wicked, my friend. On to the next!
                </Text>
                <Text>{props.clue.clue}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button success>
                <TouchableHighlight
                  onPress={() => {
                    // this.props.setModalVisible(false);
                    props.change(1, 1, props.clue.id, true);
                    props.navigation.navigate('MAP')
                  }}>
                  <Text>GO!</Text>
                </TouchableHighlight>
              </Button>
            </CardItem>
          </Modal>
        </Card>
      </Content>
    </Container>
  )
}

