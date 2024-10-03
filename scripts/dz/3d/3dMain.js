import * as THREE from 'three';
import { create3DFigures } from './3dObjectsGenerators.js';
import { AXIS, rotateFigure3d, scaleFigure3d, translateFigure3d } from './3dTransformations.js';
import { doAnimation3d } from './3dAnimation.js';




const target = document.querySelector('.render');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, target.clientWidth / target.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( target.clientWidth, target.clientHeight );
target.appendChild( renderer.domElement );


let material = new THREE.LineBasicMaterial( { color: new THREE.Color('rgb(124, 198, 118)'), linewidth: 5 } );
let [fig3d1, fig3d2] = create3DFigures(material);
scene.add(fig3d1);
scene.add(fig3d2);
camera.position.z = 2.5;
function animate() {
    doAnimation3d(fig3d1, fig3d2);
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );