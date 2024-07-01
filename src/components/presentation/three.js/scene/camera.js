import * as THREE from 'three';

export function myCamera(mount) {
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 6;
    camera.position.y = 0;
    return camera;
}