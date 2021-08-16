'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1];

	const right = {
		W: 0,
		E: 0,
	};
	const left = {
		W: 0,
		E: 0,
	};

	for (let i = 0; i < N; i++) {
		right[S[i]]++;
	}

	let min = left.W + right.E;
	for (let i = 0; i < N; i++) {
		right[S[i]]--;
		left[S[i]]++;
		min = Math.min(min, left.W + right.E);
	}
	console.log(min);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
