import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text>Whats your password?</Text>
            </View>
        )
    }
}