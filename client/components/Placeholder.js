import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { RootStack } from './Navigator'
import { getUser } from '../store/authUser'
import { connect } from 'react-redux'

class Placeholder extends Component {
  componentWillMount() {
    AsyncStorage.getItem('user')
      .then((data) => {
        if (data) {
          console.log('EXISTING USER: ', data)
          const persistedUser = JSON.parse(data)
          console.log('RAW DATA', data, 'PARSED USER', persistedUser)
          this.props.currentUser(persistedUser);
          this.props.navigation.navigate('MY PROFILE')
        }
        else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => {
        console.error(err);
        this.props.navigation.navigate('Login')
      });
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    currentUser: (data) => {
      dispatch(getUser(data))
    }
  }
}

export default connect(null, mapDispatch)(Placeholder);

