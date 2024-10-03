import { translateFigure2d, scaleFigure2d, rotateFigure2d } from "./2dTransformations.js";

const scaleFactor = 0.01;
const minScale = .9;
const maxScale = 1.5;

let currentScale = 1;
let scaleFlag = 1;

const translateDx = 0.015;
const translateBorder = 1;

let currentPos = 0;
let direction = 1;

// переписать функцию для своих анимаций
export function doAnimation2d(fig1, fig2) {
    if(scaleFlag > 0 && currentScale >= maxScale || scaleFlag < 0 && currentScale <= minScale)
        scaleFlag = -scaleFlag;

    const scale = 1 + scaleFlag * scaleFactor
    currentScale *= scale;
    

    if(Math.abs(currentPos) >= translateBorder)
        direction = -direction;

    const move = direction * translateDx
    currentPos += move;

    translateFigure2d(fig1, move);
    translateFigure2d(fig2, move);

    translateFigure2d(fig2, -currentPos);
    scaleFigure2d(fig2, scale, scale);
    translateFigure2d(fig2, currentPos);
}