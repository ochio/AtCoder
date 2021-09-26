'use strict';

function Main(input) {
	input = input.split('\n');
	const K = Number(input[0]);
	const [A, B] = input[1].split(' ').map(Number);

	const a = parseInt(A, K);
	const b = parseInt(B, K);

	console.log(a * b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
