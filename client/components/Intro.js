import React, { Component } from 'react';
import { styles } from '../assets/styles/StyleSheet';
import { Container, View, Text, Header } from 'native-base'
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'
import IntroSlides from './IntroSlides.js'

export default class Intro extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Container style={styles.Container}>
                <Header style={styles.slideHeader} iosBarStyle="light-content" />
                <View style={styles.slideWrapper}>
                    <IntroSlides navigation={this.props.navigation} style={styles.slides} />
                </View>
            </Container>
        )
    }
}