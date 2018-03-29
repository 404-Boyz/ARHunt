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
  Hint: {
    color: '#ede9e9'
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

  // Map specific styling

  mapText: {
    flex: 1,
    textAlign: 'center',
    color: '#ede9e9',
    fontFamily: 'oswald-light',
    fontSize: 20,
    marginTop: 35
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(44,48,57,0.8)'
  },
  modalInner: {
    width: '80%',
    height: '62%',
    borderRadius: 10,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    backgroundColor: '#dfdce3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'oswald-bold',
    fontSize: 36,
    color: '#222A33',
    marginBottom: 20
  },
  modalText: {
    fontFamily: 'oswald-light',
    fontSize: 20,
    color: '#807e83',
    marginBottom: 20
  },
  modalButton: {
    backgroundColor: '#09b9b8',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20
  },
  modalBT: {
    color: '#ffffff',
    fontFamily: 'oswald-light',
    fontSize: 16,
  },
  hintArea: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row'
  },

  //clueList styling

  clueListFooter: {
    backgroundColor: '#d4d0d9',
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hintArea2: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  CardTextClues: {
    fontFamily: 'oswald-light',
    color: '#807e83',
    marginTop: 0
  },
  getHints: {
    marginTop: -5
  },

  // intro specific slides

  slidesWrapper: {
    display: 'flex',
    flex: 1,
  },
  slides: {
    top: 40,
    alignSelf: 'center'
  },
  slideHeader: {
    height: 0,
    backgroundColor: '#2C3039',
    borderBottomWidth: 0
  },
  CardImage: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null
  },
  slideContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideIcon: {
    width: 180,
    height: 180,
    marginTop: 50,
    marginBottom: 30
  },
  slideTitle: {
    fontFamily: 'oswald-bold',
    color: '#dfdce3',
    letterSpacing: 1,
    fontSize: 28,
    marginBottom: 20
  },
  slideText: {
    fontFamily: 'oswald-light',
    color: '#dfdce3',
    letterSpacing: 1,
    fontSize: 20,
    textAlign: 'center'
  },
  slideButton: {
    backgroundColor: '#dfdce3',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 100
  },
  slideButtonTxt: {
    fontFamily: 'oswald-light',
    color: '#09b9b8',
    fontSize: 14,
    letterSpacing: 1,
  },

  // AR specific styling

  noteContainer: {
    height: 200,
    padding: 30,
    paddingTop: 30,
    paddingBottom: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#222A33',
    textAlign: 'center'
  },
  noteTitle: {
    fontFamily: 'oswald-bold',
    color: '#dfdce3',
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20
  },
  noteText: {
    fontFamily: 'oswald-light',
    letterSpacing: 1,
    color: '#dfdce3',
    fontSize: 14,
    marginBottom: 20
  },
  noteRemove: {
    fontFamily: 'oswald-light',
    color: '#898c93'
  }
})
