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
          this.props.currentUser(data);
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

