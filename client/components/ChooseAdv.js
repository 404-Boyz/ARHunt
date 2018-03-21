import React, { Component } from 'react';

import { View, Image, Dimensions, TouchableOpacity } from 'react-native';

import { StackNavigator, navigationOptions } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class ChooseAdv extends Component {
  constructor(props) {
    super(props)
  }

  
  render() {

    // Map over existing adventures here, using map state and dispatch to get list of adventures available.

    return (
      <Container>
         <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }} >
          <Left />
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content padder>
        <TouchableOpacity onPress={() => console.log("PRESSED")}>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://urbanmatter.com/chicago/wp-content/uploads/2016/09/chicago-image-1.jpg'}} />
                <Body>
                  <Text>Chicago Highrise Adventures</Text>
                  <Text note>A Hunt to Highlight Chicago Architecture</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://urbanmatter.com/chicago/wp-content/uploads/2016/09/chicago-image-1.jpg'}} style={{height: 200, width: '100%', flex: 1}}/>
                <Text>
                  Take a wonderful super awesome tour of the tallest buildings in Chicago... The Sears/Willis Tower, The John Hancock, The Trump Tower, and many many more! What an enjoyable time with many buildings to visit!!! SO great!!
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>1,926 Hunts Completed</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("PRESSED2")}>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/b/47/b477b45d-f22b-5d44-aedc-55f52cbbfffd/5a67940a55436.image.jpg'}} />
                <Body>
                  <Text>Chicago Pizza Adventures</Text>
                  <Text note>A Hunt to Highlight Chicago's Best Pizza'</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/b/47/b477b45d-f22b-5d44-aedc-55f52cbbfffd/5a67940a55436.image.jpg'}} style={{height: 200, width: '100%', flex: 1}}/>
                <Text>
                  If You love pizza, look no further! This delicious hunt to taste a slice from every one of our Chicago-Famouse pizza spots. Come hunrgy, Leave Happy!
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>136 Hunts Completed</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          </TouchableOpacity>

        </Content>
      </Container>
    )
  } 
}
