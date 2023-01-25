import * as THREE from 'three';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';

const Sun = (diameter, position) => {

    const textureLoader = new THREE.TextureLoader();

    const sunGeometry = new THREE.SphereGeometry(diameter, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({
        map: textureLoader.load('../assets/images/sun.jpg'),
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(position.x, position.y, position.z);

    const sunLight = new THREE.PointLight(0xffffff, 1.5);
    sun.add(sunLight);

    const textureFlare0 = textureLoader.load( "../assets/images/lensflare0.png" );
    const textureFlare1 = textureLoader.load( "../assets/images/lensflare2.png" );
    const textureFlare2 = textureLoader.load( "../assets/images/lensflare3.png" );

    const lensflare = new Lensflare();
    lensflare.addElement( new LensflareElement( textureFlare0, 512, 0 ) );
    lensflare.addElement( new LensflareElement( textureFlare1, 512, 0 ) );
    lensflare.addElement( new LensflareElement( textureFlare2, 60, 0.6 ) );
    sunLight.add( lensflare );

    return sun;
}

export default Sun;