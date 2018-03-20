
import Expo, { Location } from 'expo';
import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, Vibration } from 'react-native'

import ARModal from './AR-Modal.js'

import * as THREE from 'three'; // 0.87.1
import ExpoTHREE from 'expo-three'; // 2.0.2

import geolib from 'geolib';

console.disableYellowBox = true;

export default class AR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            currentPosition: {
                latitude: 0,
                longitude: 0
            },
            nextPosition: {
                latitude: 41.895370,
                longitude: -87.638953,
            },
            distToNext: NaN,
            isInside: false,
            counter: 0
        };
        this._onGLContextCreate = this._onGLContextCreate.bind(this);
        this.makeCube = this.makeCube.bind(this);
    }

    touch = new THREE.Vector2();
    raycaster = new THREE.Raycaster();

    componentDidMount() {
        this.locationFinder();
    }

    // checking current location and distance to clue

    locationFinder = async () => {
        await Location.watchPositionAsync({ enableHighAccuracy: true, distanceInterval: 1 },
            (position) => {

                // REVIEW - Why are you calling setState three times?
                this.setState({ currentPosition: { latitude: position.coords.latitude, longitude: position.coords.longitude } });
                this.setState({ distToNext: geolib.getDistance(this.state.currentPosition, this.state.nextPosition, 1) });
                this.setState({ isInside: geolib.isPointInCircle(this.state.currentPosition, this.state.nextPosition, 30) }, () => {
                    if (this.state.isInside && this.state.counter === 0) {
                        this.state.counter++
                        this.makeCube(this.gl)
                    }
                    console.log('dist', this.state.distToNext)
                });
            })
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

    runHitTest = () => {
        this.raycaster.setFromCamera(this.touch, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children);
        if (intersects.length > 0) {
            this._setModalVisible(!this.state.modalVisible)
        } else {
            Vibration.vibrate()
        }
    };

    // set up the AR scene with scene, camera and render

    _onGLContextCreate = async (gl) => {
        this.gl = gl;
        this.glWidth = gl.drawingBufferWidth;
        this.glHeight = gl.drawingBufferHeight;
        this.arSession = await this._glView.startARSessionAsync();
        this.scene = new THREE.Scene();
        this.camera = ExpoTHREE.createARCamera(this.arSession, this.glWidth, this.glHeight, 0.01, 1000);
        this.renderer = ExpoTHREE.createRenderer({ gl });

        this.renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
        this.scene.background = ExpoTHREE.createARBackgroundTexture(this.arSession, this.renderer);

        this.makeCube(this.gl);
    }

    // create the AR cube

    makeCube(gl) {
        let animate;
        console.log('IN', this.state.distToNext)

        // checking distance to clue location and rendering cube or not based on that

        if (this.state.distToNext < 30) {
            const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);

            // randomizing the cube colors and creating the 3D/AR shape

            for (let i = 0; i < geometry.faces.length; i += 2) {
                let hex = Math.random() * 0xffffff;
                geometry.faces[i].color.setHex(hex);
                geometry.faces[i + 1].color.setHex(hex);
            }
            const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors, overdraw: 0.5 });
            const cube = new THREE.Mesh(geometry, material);

            cube.position.z = -8;
            cube.position.y = 0.8;

            this.scene.add(cube);

            // run the AR scene & camera with the cube

            animate = () => {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.07;
                cube.rotation.y += 0.04;

                this.renderer.render(this.scene, this.camera);
                gl.endFrameEXP();
            }
        } else {

            // run the AR scene & camera without the cube

            animate = () => {
                requestAnimationFrame(animate);
                this.renderer.render(this.scene, this.camera);
                gl.endFrameEXP();
            }
        }
        animate();
    }


    _setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    render() {
        let modal = null;
        if (this.state.modalVisible) {
            modal = (<ARModal setModalVisible={this._setModalVisible.bind(this)} />)
        }
        return (
            <TouchableOpacity disabled={false} onPress={(evt) =>
                this.updateTouch(evt)} style={{ flex: 1 }}>
                <Expo.GLView
                    ref={(ref) => this._glView = ref}
                    style={{ flex: 1 }}
                    onContextCreate={this._onGLContextCreate}
                />
                {modal}
            </TouchableOpacity>

        );
    }

}
