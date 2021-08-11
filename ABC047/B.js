'use strict';

function Main(input) {
	input = input.split('\n');
	const [W, H, N] = input[0].split(' ').map(Number);

	let x_left = 0;
	let x_right = W;
	let y_top = H;
	let y_bottom = 0;

	for (let i = 0; i < N; i++) {
		const [x, y, a] = input[1 + i].split(' ').map(Number);
		if (a === 1) {
			x_left = Math.max(x_left, x);
		} else if (a === 2) {
			x_right = Math.min(x_right, x);
		} else if (a === 3) {
			y_bottom = Math.max(y_bottom, y);
		} else {
			y_top = Math.min(y_top, y);
		}
	}

	let ans = x_right <= x_left || y_top <= y_bottom ? 0 : (x_right - x_left) * (y_top - y_bottom);
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
