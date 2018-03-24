import { StyleSheet } from 'react-native';

export const styles = new StyleSheet.create({

  // General styling

  Container: {
    backgroundColor: '#2C3039'
  },
  Content: {
    padding: 40
  },
  Card: {
    flex: 0,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15
  },
  CardHead: {
    backgroundColor: '#d4d0d9'
  },
  CardBody: {
    backgroundColor: '#dfdce3'
  },
  Header: {
    backgroundColor: '#222A33',
    borderBottomWidth: 0
  },
  title: {
    color: '#ede9e9',
    fontFamily: 'oswald-light',
    letterSpacing: 4
  },
  hamburger: {
    color: '#ede9e9'
  },
  signInText: {
    alignSelf: 'center',
    fontSize: 30,
  },
  signInInput: {
    marginRight: 35,
    marginLeft: 35,
    marginBottom: 12,
    color: '#cccccc',
    padding: 4
  },
  signInButton: {
    alignSelf: 'center',
    backgroundColor: '#10BBBA'
  },
  SideBar: {
    height: 120,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  mapText: {
    flex: 1,
    textAlign: 'center'
  },

  // Login specific styling

  HeaderLogin: {
    backgroundColor: '#2C3039',
    borderBottomWidth: 0
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 45,
    marginTop: 20
  },
  mainLogo: {
    width: 180,
    height: 197,
    flex: 1
  },
  signUpTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60
  },
  signUpText: {
    color: '#cccccc',
    fontSize: 14
  },
  input: {
    color: '#cccccc'
  },

  // Signup specific styling
  mainLogo2: {
    width: 120,
    height: 131,
    flex: 1
  },

  // Drawer specific styling

  ContainerNav: {
    backgroundColor: '#222A33'
  },
  DrawerImg: {
    width: 210,
    height: 120,
    marginBottom: 40
  },
  NavText: {
    color: '#ede9e9',
    fontFamily: 'oswald-light',
    letterSpacing: 2,
    marginLeft: 12
  },
  NavItem: {
    borderBottomWidth: 0
  }

})
