import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ViroSample from './AR';
import { AR, ChooseAdv, ClueList, Home, LogIn, TreasureMap, Profile, SignUp } from './index'



const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  // AR: {
  //   screen: ViroSample
  // },
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

},
  {
    initialRouteName: 'Home'
  }
);

export default RootStack;
