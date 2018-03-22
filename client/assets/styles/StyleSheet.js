import { StyleSheet } from 'react-native';

export const styles = new StyleSheet.create({
  Card: {
    flex: 0
  },
  Header: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  },
  signInText: {
    alignSelf: 'center',
    fontSize: 30
  },
  signInInput: {
    margin: 15,
    marginRight: 15,
    marginLeft: 15
  },
  signInButton: {
    alignSelf: 'center'
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
  }
})
