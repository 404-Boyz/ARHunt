import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AR, ChooseAdv, ClueList, Home, Login, TreasureMap, Profile, SignUp } from './index'



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
  Login: {
    screen: Login
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
    screen: AR
  }

},
  {
    initialRouteName: 'Home'
  }
);

export default RootStack;
