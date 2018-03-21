import React from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { getAllAdventures } from '../store';
import { connect } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchAdventures();
  }


  render() {
    const adventures = this.props.adventures;

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
          {adventures.filter(adventure => adventure.status === 'active').map(adventure => {
            return (
            <TouchableOpacity key={adventure.id} onPress={() => console.log("PRESSED")}>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: `${adventure.photoUrl}`}} />
                  <Body>
                    <Text>{adventure.name}</Text>
                    <Text note>DO SOMETHING LATER</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: `${adventure.photoUrl}`}} style={{height: 200, width: '100%', flex: 1}}/>
                  <Text>
                    {adventure.description}
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
             )
            }
          )}
          <Button title='Hit me' onPress={() => this.props.navigation.navigate('Home')} />
        </Content>
      </Container>
    )
  }
}

const mapState = (state) => {
  return {
    adventures: state.adventure
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAdventures: () => {
      dispatch(getAllAdventures())
    }
  }
}


export default connect(mapState, mapDispatch)(Profile);
