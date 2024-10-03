export const AXIS = {
	X: 1,
	Y: 2,
	Z: 3
};

export function translateFigure3d(figure, dx = 0, dy = 0, dz = 0) {
    const atr = figure.geometry.getAttribute('position');
    const points = atr.array;

    translatePoints3d(points, dx, dy, dz);
    atr.needsUpdate = true;
}

export function scaleFigure3d(figure, sx = 1, sy = 1, sz = 1) {
    const atr = figure.geometry.getAttribute('position');
    const points = atr.array;

    scalePoints3d(points, sx, sy, sz);
    atr.needsUpdate = true;
}

export function rotateFigure3d(figure, angle = 0, axis = AXIS.Y) {
    const atr = figure.geometry.getAttribute('position');
    const points = atr.array;

    rotatePoints3d(points, angle, axis);
    atr.needsUpdate = true;
}

function translatePoints3d(points, dx, dy, dz) {
    // определеить логику преобразования поворота
    // для дальнейшего добавления к анимации
}

function scalePoints3d(points, sx, sy, sz) {
	for(let i = 0; i < points.length; i += 3) {
		points[i] *= sx;
		points[i + 1] *= sy;
        points[i + 2] *= sz;
	}
}

function rotatePoints3d(points, angle, axis) {
    for(let i = 0; i < points.length; i += 3) {
		let x = points[i];
		let y = points[i + 1];
		let z = points[i + 2];
		switch(axis) {
			case AXIS.X:
				points[i + 1] = y * Math.cos(angle) - z * Math.sin(angle);
				points[i + 2] = y * Math.sin(angle) + z * Math.cos(angle);
				break;
			case AXIS.Y:
				points[i] = x * Math.cos(angle) + z * Math.sin(angle);
				points[i + 2] = -x * Math.sin(angle) + z * Math.cos(angle);
				break;
			case AXIS.Z:
				points[i] = x * Math.cos(angle) + y * Math.sin(angle);
				points[i + 1] = -x * Math.sin(angle) + y * Math.cos(angle);
				break;
		}
	}
}