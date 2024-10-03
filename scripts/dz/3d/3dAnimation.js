import { AXIS, rotateFigure3d, scaleFigure3d, translateFigure3d } from "./3dTransformations.js";

const rotateFactor = 0.01;

const scaleFactor = 0.005;
const minScale = .6;
const maxScale = 1.2;

let currentScale = 1;
let scaleFlag = 1;

// переписать функцию для своих анимаций
export function doAnimation3d(fig1, fig2) {
    if(scaleFlag > 0 && currentScale >= maxScale || scaleFlag < 0 && currentScale <= minScale)
        scaleFlag = -scaleFlag;

    const scale = 1 + scaleFlag * scaleFactor
    currentScale *= scale;

    rotateFigure3d(fig2, rotateFactor, AXIS.X);
    rotateFigure3d(fig2, rotateFactor, AXIS.Y);
    scaleFigure3d(fig2, scale, scale, scale);

    rotateFigure3d(fig1, -rotateFactor, AXIS.Y);
    
}