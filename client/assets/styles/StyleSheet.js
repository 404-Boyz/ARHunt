import { StyleSheet } from 'react-native';

export const styles = new StyleSheet.create({

  // General styling

  Container: {
    backgroundColor: '#2C3039'
  },
  Content: {
    padding: 15
  },
  Card: {
    flex: 0,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#dfdce3'
  },
  CardHeadFoot: {
    backgroundColor: '#d4d0d9',
    paddingTop: 10,
    paddingBottom: 10
  },
  CardBody: {
    backgroundColor: '#dfdce3',
    paddingTop: 20,
    paddingBottom: 20
  },
  CardTitle: {
    fontFamily: 'oswald-light',
    color: '#222A33',
    letterSpacing: 1,
    fontSize: 18
  },
  CardNote: {
    fontFamily: 'oswald-light',
    letterSpacing: 1
  },
  CardText: {
    fontFamily: 'oswald-light',
    color: '#807e83',
    marginTop: 20
  },
  CardHunts: {
    color: '#09b9b8',
    fontFamily: 'oswald-light',
    fontSize: 14
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
    padding: 4
  },
  signInButton: {
    alignSelf: 'center',
    backgroundColor: '#10BBBA',
    paddingTop: 30,
    paddingBottom: 30
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
    marginBottom: 40,
    marginTop: 30
  },
  NavText: {
    color: '#ede9e9',
    fontFamily: 'oswald-light',
    letterSpacing: 1,
    marginLeft: 12
  },
  NavItem: {
    borderBottomWidth: 0
  },

  // Profile specific styling

  profileHead: {
    backgroundColor: '#0da09c',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    width: '100%'
  },
  profileName: {
    color: '#2C3039',
    fontSize: 24,
    fontFamily: 'oswald-light',
    letterSpacing: 2
  },
  profilePoints: {
    marginTop: 5,
    fontSize: 14,
    color: '#d4d0d9'
  },

  //modal styling
  modalContainer: {
    marginTop: 60,

  }
})
