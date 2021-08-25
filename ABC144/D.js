'use strict';

function Main(input) {
	let [a, b, x] = input.split(' ').map(Number);
	const lessHalf = x < (a ** 2 * b) / 2;

	x = x / a;
	let ans = 0;
	if (lessHalf) {
		ans = Math.atan(b ** 2 / (2 * x));
	} else {
		ans = Math.atan((2 * (a * b - x)) / a ** 2);
	}
	console.log((ans / Math.PI) * 180);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
