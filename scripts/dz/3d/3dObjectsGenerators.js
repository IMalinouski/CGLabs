import * as THREE from 'three';

export function create3DFigures(material = new THREE.LineBasicMaterial( { color: 0xffffff } )) {    
    return [
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(createPointsForFirstFigure()), material),
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(createPointsForSecondFigure()), material)
    ];
}

/*
    Перезаписать точки для 1 фигуры по варианту
*/
function createPointsForFirstFigure() {
    return [
        new THREE.Vector3( -0.5, 0.5, 0.5 ),
        new THREE.Vector3( -0.5, 0.5, -0.5 ),
        new THREE.Vector3( 0.5, 0.5, -0.5 ),
        new THREE.Vector3( 0.5, 0.5, 0.5 ),
        new THREE.Vector3( -0.5, 0.5, 0.5 ),
        new THREE.Vector3( -0.5, -0.5, 0.5 ),
        new THREE.Vector3( 0.5, -0.5, 0.5 ),
        new THREE.Vector3( 0.5, 0.5, 0.5 ),
        new THREE.Vector3( 0.5, 0.5, -0.5 ),
        new THREE.Vector3( 0.5, -0.5, -0.5 ),
        new THREE.Vector3( 0.5, -0.5, 0.5 ),
        new THREE.Vector3( -0.5, -0.5, 0.5 ),
        new THREE.Vector3( -0.5, -0.5, -0.5 ),
        new THREE.Vector3( 0.5, -0.5, -0.5 ),
        new THREE.Vector3( -0.5, -0.5, -0.5 ),
        new THREE.Vector3( -0.5, 0.5, -0.5 ),
    ];
}

/*
    Перезаписать точки для 2 фигуры по варианту
*/
function createPointsForSecondFigure() {
    return [
        new THREE.Vector3( -0.2, 0.2, 0.2 ),
        new THREE.Vector3( -0.2, 0.2, -0.2 ),
        new THREE.Vector3( 0.2, 0.2, -0.2 ),
        new THREE.Vector3( 0.2, 0.2, 0.2 ),
        new THREE.Vector3( -0.2, 0.2, 0.2 ),
        new THREE.Vector3( -0.2, -0.2, 0.2 ),
        new THREE.Vector3( 0.2, -0.2, 0.2 ),
        new THREE.Vector3( 0.2, 0.2, 0.2 ),
        new THREE.Vector3( 0.2, 0.2, -0.2 ),
        new THREE.Vector3( 0.2, -0.2, -0.2 ),
        new THREE.Vector3( 0.2, -0.2, 0.2 ),
        new THREE.Vector3( -0.2, -0.2, 0.2 ),
        new THREE.Vector3( -0.2, -0.2, -0.2 ),
        new THREE.Vector3( 0.2, -0.2, -0.2 ),
        new THREE.Vector3( -0.2, -0.2, -0.2 ),
        new THREE.Vector3( -0.2, 0.2, -0.2 ),
    ];
}