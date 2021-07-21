'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].trim().split(' ').map(Number);

	const color = [false, false, false, false, false, false, false, false];
	let other = 0;
	for (let i = 0; i < N; i++) {
		if (1 <= ary[i] && ary[i] <= 399) {
			color[0] = true;
		} else if (400 <= ary[i] && ary[i] <= 799) {
			color[1] = true;
		} else if (800 <= ary[i] && ary[i] <= 1199) {
			color[2] = true;
		} else if (1200 <= ary[i] && ary[i] <= 1599) {
			color[3] = true;
		} else if (1600 <= ary[i] && ary[i] <= 1999) {
			color[4] = true;
		} else if (2000 <= ary[i] && ary[i] <= 2399) {
			color[5] = true;
		} else if (2400 <= ary[i] && ary[i] <= 2799) {
			color[6] = true;
		} else if (2800 <= ary[i] && ary[i] <= 3199) {
			color[7] = true;
		} else {
			other++;
		}
	}

	const t = color.filter((v) => v).length;
	const n = 8 - t;

	const max = t + other;
	const min = t !== 0 ? t : 1;

	console.log(min, max);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
