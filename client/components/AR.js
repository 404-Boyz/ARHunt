
import Expo from 'expo';
import React, { Component } from 'react';
import { TouchableOpacity, View, Modal, TouchableHighlight, Text, Dimensions } from 'react-native'

import * as THREE from 'three'; // 0.87.1
import ExpoTHREE from 'expo-three'; // 2.0.2

console.disableYellowBox = true;

export default class AR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    touch = new THREE.Vector2();
    raycaster = new THREE.Raycaster();

    updateTouch = (evt) => {
        let { height, width } = Dimensions.get('window')
        let x = evt.nativeEvent.locationX;
        let y = evt.nativeEvent.locationY
        this.touch.x = x / width * 2 - 1;
        this.touch.y = -(y / height) * 2 + 1;
        console.log('x', x)
        console.log('HIT 1')
        this.runHitTest();
    };

    runHitTest = () => {
        this.raycaster.setFromCamera(this.touch, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children);
        if (intersects.length > 0) {
            this.setModalVisible(!this.state.modalVisible)
        }
    };

    _onGLContextCreate = async (gl) => {
        this.glWidth = gl.drawingBufferWidth;
        this.glHeight = gl.drawingBufferHeight;
        this.arSession = await this._glView.startARSessionAsync();
        this.scene = new THREE.Scene();
        this.camera = ExpoTHREE.createARCamera(this.arSession, this.glWidth, this.glHeight, 0.01, 1000);
        this.renderer = ExpoTHREE.createRenderer({ gl });

        this.renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
        this.scene.background = ExpoTHREE.createARBackgroundTexture(this.arSession, this.renderer);

        const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);

        for (let i = 0; i < geometry.faces.length; i += 2) {
            let hex = Math.random() * 0xffffff;
            geometry.faces[i].color.setHex(hex);
            geometry.faces[i + 1].color.setHex(hex);
        }
        const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors, overdraw: 0.5 });
        const cube = new THREE.Mesh(geometry, material);

        cube.position.z = -10;
        cube.position.y = 0.8;

        this.scene.add(cube);


        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.07;
            cube.rotation.y += 0.04;

            this.renderer.render(this.scene, this.camera);
            gl.endFrameEXP();
        }

        animate();
    }


    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    render() {
        return (
            <TouchableOpacity disabled={false} onPress={(evt) =>
                this.updateTouch(evt)} style={{ flex: 1 }}>
                <Expo.GLView
                    ref={(ref) => this._glView = ref}
                    style={{ flex: 1 }}
                    onContextCreate={this._onGLContextCreate}
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>

        );
    }

}

