'use strict';

function Main(input) {
	const [a, b, x] = input.split(' ').map(BigInt);

	const d1 = b / x;
	const d2 = a == 0 ? -1n : (a - 1n) / x;
	console.log((d1 - d2).toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
