import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { fetchActiveLocation, changeVisitedStatus } from '../store';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'
import { styles } from '../assets/styles/StyleSheet'
import { Ionicons } from '@expo/vector-icons';

export const ARModal = (props) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalTitle}>CLUE #{props.clue.positionInHunt}</Text>
          <Text style={styles.modalText}>{props.clue.clue}</Text>
          <TouchableHighlight
            style={styles.modalButton}
            onPress={() => {
              // this.props.setModalVisible(false);
              this.props.navigation.navigate('MAP')
              props.change(props.user.id, 1, props.clue.id, true)
            }}>
            <Text style={styles.modalBT}>   On To The Next Clue!    </Text>
          </TouchableHighlight>
          <View style={styles.hintArea}>
            <Ionicons name="ios-help-circle" size={32} color="#09b9b8" />
            <Text style={styles.CardHunts}> Stuck? Get A Hint! </Text>
          </View>
        </View>
      </View>
    </Modal>
  )
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

