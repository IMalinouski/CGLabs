import * as THREE from 'three';
import { create2DFigures } from './2dObjectsGenerators.js';
import { translateFigure2d, scaleFigure2d, rotateFigure2d } from './2dTransformations.js';
import { doAnimation2d } from './2dAnimation.js';

const target = document.querySelector('.render');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, target.clientWidth / target.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( target.clientWidth, target.clientHeight );
target.appendChild( renderer.domElement );


let material = new THREE.LineBasicMaterial( { color: new THREE.Color('rgb(124, 198, 118)'), linewidth: 5 } );
let [fig2d1, fig2d2] = create2DFigures(material);
scene.add(fig2d1);
scene.add(fig2d2);
camera.position.z = 2;
function animate() {
    doAnimation2d(fig2d1, fig2d2);
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );