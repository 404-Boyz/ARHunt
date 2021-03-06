
import Expo, { Location, Audio, Constants } from 'expo';
import React from 'react';
import { TouchableOpacity, Dimensions, View, Vibration, Text } from 'react-native'
import { Container, Header, Left, Icon, Right, Button, Title, Body } from 'native-base';
import { connect } from 'react-redux';
import { styles } from '../assets/styles/StyleSheet';
import { changeVisitedStatus, changeActiveStatus } from '../store';
import { ARModal } from './AR-Modal.js'
import SlidingUpPanel from 'rn-sliding-up-panel';
import { Ionicons } from '@expo/vector-icons';

import * as THREE from 'three'; // 0.87.1
import ExpoTHREE from 'expo-three'; // 2.0.2

import geolib from 'geolib';

console.disableYellowBox = true;

class AR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            noteVisible: false,
            distToNext: NaN,
            clue: this.props.locations.find(loc => loc.visited === false)
        };
        this._onGLContextCreate = this._onGLContextCreate.bind(this);
        this.makeCube = this.makeCube.bind(this);

    }


    touch = new THREE.Vector2();
    raycaster = new THREE.Raycaster();


    // checking current location and distance to clue

    locationFinder = () => {
        this.setState({
            distToNext: geolib.getDistance(this.props.geoPosition, { latitude: +this.state.clue.latitude, longitude: +this.state.clue.longitude }, 5),
        }, () => {
            if (this.state.distToNext < 25 && this.state.clue.positionInHunt > 1) {
                this.setState({ noteVisible: true })
                this.makeCube(this.gl)
            } else if (this.state.clue.positionInHunt === 1) {
                this.makeCube(this.gl)
            }
        });
    }

    // grab the touch location and match it to the screen

    updateTouch = (evt) => {
        let { height, width } = Dimensions.get('window')
        let x = evt.nativeEvent.locationX;
        let y = evt.nativeEvent.locationY
        this.touch.x = x / width * 2 - 1;
        this.touch.y = -(y / height) * 2 + 1;
        this.runHitTest();
    };

    // check the touch location against the raycaster and see if it matches our cube

    cubeTappedAudio = async () => {
        const source = require("../assets/audio/171671__fins__success-1.wav")

        const sound = new Audio.Sound();
        try {
            await Audio.setIsEnabledAsync(true);
            await sound.loadAsync(source);
            await sound.playAsync();
        } catch (error) {
            console.error(error);
        }

    }

    winningScreenAudio = async () => {
        const source = require("../assets/audio/410578__yummie__game-win-screen-background-music.mp3")
        const sound = new Audio.Sound();

        try {
            await Audio.setIsEnabledAsync(true);
            const sound = new Audio.Sound();
            await sound.loadAsync(source);
            await sound.playAsync();

        } catch (error) {
            console.error(error);
        }
    }


    runHitTest = () => {
        this.raycaster.setFromCamera(this.touch, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children);
        if (intersects.length > 0) {
            //audio fire here
            this.cubeTappedAudio();
            //if last clue, redirect to winner page
            (this.state.clue.name === 'WINNER') ? this.props.navigation.navigate('Winning') : this._setModalVisible(!this.state.modalVisible)
            this.scene.remove.apply(this.scene, this.scene.children);
        } else {
            Vibration.vibrate()
        }
    };

    // set up the AR scene with scene, camera and render

    _onGLContextCreate = async (gl) => {
        console.log('ACTUAL CURRENT LOCATION!!!', this.props.locations, this.state.clue)
        this.gl = gl;
        this.glWidth = gl.drawingBufferWidth;
        this.glHeight = gl.drawingBufferHeight;
        this.arSession = await this._glView.startARSessionAsync();
        this.scene = new THREE.Scene();
        this.camera = ExpoTHREE.createARCamera(this.arSession, this.glWidth, this.glHeight, 0.01, 1000);
        this.renderer = ExpoTHREE.createRenderer({ gl });
        this.renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
        this.scene.background = ExpoTHREE.createARBackgroundTexture(this.arSession, this.renderer);

        let animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
            gl.endFrameEXP();
        }
        animate()

        this.locationFinder()
    }

    // create the AR cube

    makeCube = async (gl) => {
        let animate;
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);

        // randomizing the cube colors and creating the 3D/AR shape

        // for (let i = 0; i < geometry.faces.length; i += 2) {
        //     let hex = Math.random() * 0xffffff;
        //     geometry.faces[i].color.setHex(hex);
        //     geometry.faces[i + 1].color.setHex(hex);
        // }
        // const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors, overdraw: 0.5 });

        // custom clue generated on cube

        const texture = await ExpoTHREE.loadAsync(
            require('../assets/img/clue.png')
        );

        const material = new THREE.MeshBasicMaterial({ map: texture });

        const cube = new THREE.Mesh(geometry, material);

        cube.position.z = -1;
        cube.position.y = 0.2;

        this.scene.add(cube);


        // run the AR scene & camera with the cube

        animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.07;
            cube.rotation.y += 0.04;

            this.renderer.render(this.scene, this.camera);
            gl.endFrameEXP();
        }
        animate();
    }


    _setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        let modal = null;
        if (this.state.modalVisible && this.state.clue) {
            modal = (<ARModal user={this.props.user} clue={this.state.clue} navigation={this.props.navigation} change={this.props.changeStatus} setModalVisible={this._setModalVisible.bind(this)} />)
        }
        // let info;
        // if (this.state.clue.positionInHunt !== 1) {
        //     info = this.props.locations.filter(loc => loc.positionInHunt === (+this.state.clue.positionInHunt) - 1)
        //     console.log('INFO', this.info)
        // }
        console.log('INFO2', this.info)
        return (
            <Container style={styles.Container}>
                <Header style={styles.Header} iosBarStyle="light-content">
                    <Left />
                    <Body>
                        <Title style={styles.title}>CAMERA</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon style={styles.title} name="menu" />
                        </Button>
                    </Right>
                </Header>
                <TouchableOpacity disabled={false} onPress={(evt) =>
                    this.updateTouch(evt)} style={{ flex: 1 }}>
                    <Expo.GLView
                        ref={(ref) => this._glView = ref}
                        style={{ flex: 1 }}
                        onContextCreate={this._onGLContextCreate}
                    />
                    {modal}
                </TouchableOpacity>
                {this.state.clue.positionInHunt > 1 ?
                    <SlidingUpPanel
                        ref={c => this._panel = c}
                        visible={this.state.noteVisible}
                        onRequestClose={() => this.setState({ noteVisible: false })}>
                        <View style={styles.noteContainer}>
                            <Text style={styles.noteTitle}>YOU FOUND {this.props.locations.find(loc => loc.positionInHunt === this.state.clue.positionInHunt - 1).name.toUpperCase()}</Text>
                            <Text style={styles.noteText}>{this.props.locations.find(loc => loc.positionInHunt === this.state.clue.positionInHunt - 1).success}</Text>
                            <Text style={styles.noteRemove}><Ionicons name={'md-arrow-dropdown-circle'} size={16} color="#898c93" />  Swipe down to hide this and find your next clue</Text>
                            <Button title='hide' onPress={() => this._panel.transitionTo(0)} />
                        </View>
                    </SlidingUpPanel>
                    : null}
            </Container>

        );
    }

}

// {this.state.clue.name.toUpperCase()}

const mapState = (state) => {
    return {
        geoPosition: state.geoPosition,
        locations: state.location,
        user: state.authUser
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeStatus: (user, adventure, location) => {
            dispatch(changeVisitedStatus(user, adventure, location))
        }
    }
}

export default connect(mapState, mapDispatch)(AR);
