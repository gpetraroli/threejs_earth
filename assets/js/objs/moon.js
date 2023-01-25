import * as THREE from 'three';

const Earth = (diameter) => {

    const textureLoader = new THREE.TextureLoader();

    const earthGeometry = new THREE.SphereGeometry(diameter, 32, 32);
    const earthMaterial = new THREE.MeshLambertMaterial({
        map: textureLoader.load('../assets/images/moon.jpg'),
    });

    const moon = new THREE.Mesh(earthGeometry, earthMaterial);
    moon.position.z = 100;

    const moonObject = new THREE.Object3D();
    moonObject.add(moon);

    return moonObject;
};

export default Earth;