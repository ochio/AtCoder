'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const A = input[1].split(' ').map(Number);

	const max_a = Math.max(...A.slice(0, (1 << N) / 2));
	const max_b = Math.max(...A.slice((1 << N) / 2));

	const n = max_a > max_b ? max_b : max_a;

	console.log(A.indexOf(n) + 1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
