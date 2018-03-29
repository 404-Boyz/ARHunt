import React from "react";
import { Image } from "react-native";
import { Container, Content, Text, List, ListItem, Body } from "native-base";
import { styles } from '../assets/styles/StyleSheet'
import { Ionicons } from '@expo/vector-icons';
import { logout, stopTracking } from '../store'
import { connect } from 'react-redux'

const routes = ["MY PROFILE", "CLUE LIST", "MAP", "CAMERA", "ADVENTURES"];
const icons = {
    'MY PROFILE': 'ios-contact',
    'CLUE LIST': 'ios-list-box-outline',
    'MAP': 'ios-map-outline',
    'CAMERA': 'ios-qr-scanner',
    'ADVENTURES': 'ios-images-outline',
    'logout': 'ios-log-out',
    
}



class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container style={styles.ContainerNav}>
                <Content>
                    <Image style={styles.DrawerImg}
                        source={
                            require('../assets/img/SA-header.png')
                        }
                    >
                    </Image>
                    <Body>
                        <List
                            dataArray={routes}
                            renderRow={data => {
                                console.log('DATA', icons[data])
                                return (
                                    <ListItem
                                        style={styles.NavItem}
                                        button
                                        onPress={() => this.props.navigation.navigate(data)}>
                                        <Ionicons name={icons[data]} size={32} color="#ede9e9" />
                                        <Text style={styles.NavText}>{data}</Text>
                                    </ListItem>
                                );
                            }} />
                        <List>
                            <ListItem
                                style={{ borderBottomWidth: 0, marginLeft: -12 }}
                                button
                                onPress={this.props.handleLogOut.bind(this)}>
                                <Ionicons name={icons['logout']} size={32} color="#ede9e9" />
                                <Text style={styles.NavText}>LOG OUT</Text>
                            </ListItem>
                        </List>
                    </Body>
                </Content>
            </Container>
        );
    }
}

const mapDispatch = (dispatch) => {

    return {
        handleLogOut() {
            dispatch(logout());
            dispatch(stopTracking());
            this.props.navigation.navigate('Login')
        }
    }
}


export default connect(null, mapDispatch)(SideBar)
