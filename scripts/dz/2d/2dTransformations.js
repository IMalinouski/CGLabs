

export function translateFigure2d(figure, dx = 0, dy = 0) {
    const atr = figure.geometry.getAttribute('position');
    const points = atr.array;

    translatePoints2d(points, dx, dy);
    atr.needsUpdate = true;
}

export function scaleFigure2d(figure, sx = 1, sy = 1) {
    const atr = figure.geometry.getAttribute('position');
    const points = atr.array;

    scalePoints2d(points, sx, sy);
    atr.needsUpdate = true;
}

export function rotateFigure2d(figure, angle = 0) {
    const atr = figure.geometry.getAttribute('position');
    const points = atr.array;

    rotatePoints2d(points, angle);
    atr.needsUpdate = true;
}

function translatePoints2d(points, dx, dy) {
    for(let i = 0; i < points.length; i += 3) {
		points[i] += dx;
		points[i + 1] += dy;
	}
}

function scalePoints2d(points, sx, sy) {
	for(let i = 0; i < points.length; i += 3) {
		points[i] *= sx;
		points[i + 1] *= sy;
	}
}

function rotatePoints2d(points, angle) {
    // определеить логику преобразования поворота
    // для дальнейшего добавления к анимации
}