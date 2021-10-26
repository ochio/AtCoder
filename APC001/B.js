'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const a = input[1].split(' ').map(Number);
	const b = input[2].split(' ').map(Number);

	let sum_a = 0;
	let sum_b = 0;
	for (let i = 0; i < N; i++) {
		if (a[i] <= b[i]) {
			sum_a += Math.floor((b[i] - a[i]) / 2);
		} else {
			sum_b += a[i] - b[i];
		}
	}

	const ans = sum_a >= sum_b ? 'Yes' : 'No';
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
