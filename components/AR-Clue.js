import Expo from 'expo';
import React from 'react';

import * as THREE from 'three'; // 0.87.1
import ExpoTHREE from 'expo-three'; // 2.0.2

console.disableYellowBox = true;

export default class Clue extends React.Component {

    constructor() {
        super()
    }

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
        // let materials = [];
        // for (let i = 1; i < 7; i++) {
        //     materials.push([new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/img/clue_side' + i + '.png') })])
        // }
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.15, material));
        // const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        cube.position.z = 0;
        cube.position.y = 0;
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
}

