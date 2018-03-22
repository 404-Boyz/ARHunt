import React from "react";
import { Image } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "ChooseAdv", "ClueList", "Login", "TreasureMap", "SignUp", "Profile", "AR", "ARModal"];

export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
                        }}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                    </Image>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}