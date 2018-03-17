import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ViroSample from './AR';
import { AR, ChooseAdv, ClueList, Home, LogIn, TreasureMap, Profile, SignUp, Clue } from './index'



const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  ChooseAdv: {
    screen: ChooseAdv
  },
  ClueList: {
    screen: ClueList
  },
  LogIn: {
    screen: LogIn
  },
  TreasureMap: {
    screen: TreasureMap
  },
  Profile: {
    screen: Profile
  },
  SignUp: {
    screen: SignUp
  },
  AR: {
    screen: Clue
  }

},
  {
    initialRouteName: 'Login'
  }
);

export default RootStack;
