import Expo from 'expo';
import React from 'react';
import { TouchableOpacity } from 'react-native'

import * as THREE from 'three'; // 0.87.1
import ExpoTHREE from 'expo-three'; // 2.0.2

console.disableYellowBox = true;

export default class Clue extends React.Component {

    render() {
        return (

            <Expo.GLView
                ref={(ref) => this._glView = ref}
                style={{ flex: 1 }}
                onContextCreate={this._onGLContextCreate}
            />

        );
    }

    _onGLContextCreate = async (gl) => {
        const width = gl.drawingBufferWidth;
        const height = gl.drawingBufferHeight;

        const arSession = await this._glView.startARSessionAsync();

        const scene = new THREE.Scene();
        const camera = ExpoTHREE.createARCamera(arSession, width, height, 0.01, 1000);
        const renderer = ExpoTHREE.createRenderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);

        // Edit the box dimensions here and see changes immediately!

        const makeCube = () => {
            const textureLoader = new THREE.TextureLoader();

            const texture0 = textureLoader.load('./assets/img/clue_side1.png');
            const texture1 = textureLoader.load('./assets/img/clue_side2.png');
            const texture2 = textureLoader.load('./assets/img/clue_side3.png');
            const texture3 = textureLoader.load('./assets/img/clue_side4.png');
            const texture4 = textureLoader.load('./assets/img/clue_side5.png');
            const texture5 = textureLoader.load('./assets/img/clue_side6.png');

            // let texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/crate.gif')

            var materials = [
                new THREE.MeshBasicMaterial({ map: texture0 }),
                new THREE.MeshBasicMaterial({ map: texture1 }),
                new THREE.MeshBasicMaterial({ map: texture2 }),
                new THREE.MeshBasicMaterial({ map: texture3 }),
                new THREE.MeshBasicMaterial({ map: texture4 }),
                new THREE.MeshBasicMaterial({ map: texture5 })
            ];

            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const cube = new THREE.Mesh(geometry, materials);

            cube.position.z = -5;
            cube.position.y = 0.5;

            scene.add(cube);

            const animate = () => {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.07;
                cube.rotation.y += 0.04;

                renderer.render(scene, camera);
                gl.endFrameEXP();
            }
            animate();
        }
        makeCube();
    }

}

