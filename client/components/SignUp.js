import React, { Component } from 'react';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { Container, Header, Content, Item, Input, Text, Left, Right, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { authSignUp } from '../store'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    }
  }
  render() {
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
        <Content>
          <Text>Your adventure awaits...</Text>
          <Text>Sign up!</Text>
          <Item regular>
            <Input placeholder='First Name' value={this.state.firstName}
              onChangeText={(value) => {
                console.log('first name: ', this.state.firstName)
                this.setState({ firstName: value })
              }} />
          </Item>
          <Item regular>
            <Input placeholder='Last Name' value={this.state.lastName}
              onChangeText={(value) => this.setState({ lastName: value })
              } />
          </Item>
          <Item regular>
            <Input placeholder='User Name' value={this.state.userName}
              onChangeText={(value) => this.setState({ userName: value })
              } />
          </Item>
          <Item regular>
            <Input placeholder='Email' value={this.state.email}
              onChangeText={(value) => this.setState({ email: value })
              } />
          </Item>
          <Item regular>
            <Input placeholder='Password' value={this.state.password}
              onChangeText={(value) => this.setState({ password: value })
              } />
          </Item>
          <Button rounded onPress={this.props.handleSignUp.bind(this, this.state)}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapDispatch = (dispatch) => {

  return {
    handleSignUp(info) {
      console.log(info);
      dispatch(authSignUp(info, 'signup'))
      this.props.navigation.navigate('Profile')
    }
  }
}


export default connect(null, mapDispatch)(SignUp)


// import React, { Component } from 'react';
// import { View, Text, Button, Image } from 'react-native';
// import { StackNavigator, navigationOptions } from 'react-navigation';
// import { Input } from 'nachos-ui'
// import { connect } from 'react-redux'
// import { auth } from '../store'
// import { RootStack } from './Navigator'


// class LogIn extends Component {
//   constructor() {
//     super()

//     this.state = {
//       name: '',
//       password: ''
//     }

//   }

//   render() {
//     return (
//       <View>
//         <Text style={{ alignSelf: 'center', fontSize: 30 }}>Log in!</Text>
//         <Input
//           name='userName'
//           style={inputStyle}
//           placeholder='User name'
//           value={this.state.name}
//           onChangeText={value => {
//             this.setState({ name: value }, () => console.log(this.state.name))
//           }}
//         />
//         <Input
//           name='password'
//           style={inputStyle}
//           placeholder='Password'
//           value={this.state.password}
//           onChangeText={value => this.setState({ password: value })}
//         />
//         <Button title='Start your hunt!' onPress={this.props.handleLogIn.bind(this, this.state.name, this.state.password)
//         }
//         />
//         <Button title="Don't have an account? Sign up now!" onPress={() => {
//           this.props.navigation.navigate('SignUp')
//         }} />
//         <Image style={{ width: 200, height: 200, alignSelf: 'center' }} source={{ uri: 'http://www.parc-des-pirates.com/uk/img/logo.png' }}
//         />
//       </View>
//     )
//   }

// }


// const mapDispatch = (dispatch) => {

//   return {
//     handleLogIn(name, password) {
//       console.log(name, password);
//       dispatch(auth(name, password, 'login'));
//       this.props.navigation.navigate('Profile')
//     }
//   }
// }


// export default connect(null, mapDispatch)(LogIn)

// const inputStyle = { margin: 15 }
