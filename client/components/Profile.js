import React, { Component } from 'react';
import { Container, Header, Left, Icon, Right, Button, Content, Text } from 'native-base';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { getAllAdventures } from '../store';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount () {
    this.props.fetchAdventures();
  }


  render() {
    console.log("PROPS", this.props, this.state)
    return (
      <Container>
        <Header style={{ backgroundColor: 'transparent', borderBottomWidth: '0px' }} >
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
          <Text>Profile!</Text>
          <Button title='Hit me' onPress={() => this.props.navigation.navigate('Home')} />
        </Content>
      </Container>
    )
  }
}

const mapState = (state) => {
  return {

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
