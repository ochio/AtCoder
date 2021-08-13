'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const A = Number(input[1]);
	const B = Number(input[2]);
	const C = Number(input[3]);
	const D = Number(input[4]);
	const E = Number(input[5]);

	const min = Math.min(A, B, C, D, E);
	const t = Math.ceil(N / min);

	console.log(t + 4);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
