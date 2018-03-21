import React from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
// import { AR, ChooseAdv, ClueList, Home, Login, TreasureMap, Profile, SignUp, SideBar } from './index.js'

import Profile from './Profile'
import TreasureMap from './TreasureMap'
import Login from './LogIn'
import SignUp from './SignUp'
import ChooseAdv from './ChooseAdv'
import AR from './AR'
import SideBar from './SideBar'
import ClueList from './ClueList'

let width = Dimensions.get('window').width / 2

const RootStack = DrawerNavigator({
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
        initialRouteName: 'Login',
        drawerPosition: 'right',
        drawerWidth: width,
        contentComponent: props => <SideBar {...props} />

    }
);
export default RootStack;
