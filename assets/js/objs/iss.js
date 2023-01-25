import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const ISS = () => {

    const loader = new GLTFLoader();

    const issObject = new THREE.Object3D();

    loader.load('../assets/models/iss.glb', (gltf) => {
        const iss = gltf.scene;
        iss.scale.set(0.005, 0.005, 0.005);
        iss.position.set(0, 0, 11);

        issObject.add(iss);
    });

    return issObject;
};

export default ISS;