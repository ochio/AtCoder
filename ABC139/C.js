'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const H = input[1].split(' ').map(Number);

	let c = 0;
	let max = 0;
	for (let i = 0; i < N; i++) {
		if (H[i] >= H[i + 1]) {
			c++;
		} else {
			max = max < c ? c : max;
			c = 0;
		}
	}
	console.log(max);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
