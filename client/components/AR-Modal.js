import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchActiveLocation, changeVisitedStatus } from '../store';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'
import { styles } from '../assets/styles/StyleSheet'
import { Ionicons } from '@expo/vector-icons';
import { ActionSheet } from 'native-base'

const BUTTONS = ["Hint #1", "Hint #2", "Cancel"];
const CANCEL_INDEX = 2;

export class ARModal extends Component {

  constructor(props) {
    super(props);
    this.props.change(1, 1, props.clue.id)
    this.state = {}
  }
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInner}>
            <Text style={styles.modalTitle}>CLUE #{this.props.clue.positionInHunt}</Text>
            <Text style={styles.modalText}>{this.props.clue.clue}</Text>
            <TouchableHighlight
              style={styles.modalButton}
              onPress={() => {

                this.props.navigation.navigate('MAP')
              }}>
              <Text style={styles.modalBT}>   On To The Next Clue!    </Text>
            </TouchableHighlight>
            <View style={styles.hintArea}>
              <Ionicons style={styles.getHints} name="ios-help-circle" size={32} color="#09b9b8" />
              <Text
                onPress={() =>
                  ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      title: `Clue #${this.props.clue.positionInHunt} Hints`
                    },
                    buttonIndex => {
                      this.setState({ clicked: BUTTONS[buttonIndex] }, () => {
                        if (this.state.clicked === 'Cancel') return
                        Alert.alert(
                          `${this.state.clicked}`,
                          `${this.props.clue.hints[(+this.state.clicked.slice(-1)) - 1]}`,
                          [
                            { text: 'Got it!', onPress: () => console.log('Saw Hint') }
                          ],
                          { cancelable: false }
                        )
                      });
                    }
                  )}
                style={styles.CardHunts}> Stuck? Get A Hint! </Text>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

// export const ARModal = (props) => {
//   return (
//     <Container>
//       <Content><Card>
//         <Modal
//           animationType="slide"
//           transparent={false}>
//           <CardItem header>
//             <Text style={styles.signInText}>Oh. Hello there.</Text>
//           </CardItem>
//           <CardItem>
//             <Body>
//               <Text>
//                 No rest for the wicked my friend! Onward:
//               </Text>
//               <Text>{props.clue.clue}</Text>

//             </Body>
//           </CardItem>
//           <CardItem style={{ alignSelf: 'center' }} footer>
//             <Button transparent info onPress={() => {
//               props.activeChange(1, 1, props.clue.id)
//               props.navigation.navigate('TreasureMap')
//             }}>
//               <Text>Go!</Text>
//             </Button>
//           </CardItem>
//         </Modal>
//       </Card></Content>
//     </Container>
//   )
// }

