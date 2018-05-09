import React from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator, Easing, Animated } from 'react-navigation';
// import { AR, ChooseAdv, ClueList, Home, Login, TreasureMap, Profile, SignUp, SideBar } from './index.js'

import Profile from './Profile'
import TreasureMap from './TreasureMap'
import Login from './LogIn'
import SignUp from './SignUp'
import ChooseAdv from './ChooseAdv'
import AR from './AR'
import SideBar from './SideBar'
import ClueList from './ClueList'
import Intro from './Intro'
import Winning from './Winning'
import { Placeholder } from './index'

let width = Dimensions.get('window').width / 2

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width2 = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width2, 0],
            })

            return { transform: [{ translateX }] }
        },
    }
}

const RootStack = DrawerNavigator({
    Placeholder: {
        screen: Placeholder
    },
    ADVENTURES: {
        screen: ChooseAdv
    },
    'CLUE LIST': {
        screen: ClueList
    },
    Login: {
        screen: Login
    },
    MAP: {
        screen: TreasureMap
    },
    'MY PROFILE': {
        screen: Profile
    },
    SignUp: {
        screen: SignUp
    },
    CAMERA: {
        screen: AR
    },
    Intro: {
        screen: Intro
    },
    'Winning': {
        screen: Winning
    }
},
    {
        initialRouteName: 'Placeholder',
        transitionConfig,
        drawerPosition: 'right',
        drawerWidth: width,
        contentComponent: props => <SideBar {...props} />

    }
);
export default RootStack;
