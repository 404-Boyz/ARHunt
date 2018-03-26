import React from "react";
import { Image } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { styles } from '../assets/styles/StyleSheet'
import { Ionicons } from '@expo/vector-icons';

const routes = ["MY PROFILE", "CLUE LIST", "MAP", "CAMERA", "ADVENTURES"];
const icons = {
    'MY PROFILE': 'ios-contact',
    'CLUE LIST': 'ios-list-box-outline',
    'MAP': 'ios-map-outline',
    'CAMERA': 'ios-qr-scanner',
    'ADVENTURES': 'ios-images-outline'
}



export default class SideBar extends React.Component {
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
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
