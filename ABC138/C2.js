'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const v = input[1].split(' ').map(Number);
	v.sort((a, b) => a - b);

	let ans = v[0];
	for (let i = 1; i < N; i++) {
		ans = (ans + v[i]) / 2;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
