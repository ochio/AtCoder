'use strict';

function Main(input) {
	input = input.trim().split('\n');
	const N = Number(input[0]);
	const ary = [];
	for (let i = 0; i < N; i++) {
		ary.push(Number(input[i + 1]));
	}
	const order = ary.slice().sort((a, b) => a - b);

	for (let i = 0; i < N; i++) {
		console.log(ary[i] !== order[N - 1] ? order[N - 1] : order[N - 2]);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
