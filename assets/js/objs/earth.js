import * as THREE from 'three';

const Earth = (diameter) => {

    const textureLoader = new THREE.TextureLoader();

    const earthGeometry = new THREE.SphereGeometry(diameter, 32, 32);
    const earthMaterial = new THREE.MeshLambertMaterial({
        map: textureLoader.load('../assets/images/earth_6K.jpg'),
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.rotation.y = 23.5 * Math.PI / 180;

    return earth;
};

export default Earth;