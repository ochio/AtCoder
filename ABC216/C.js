'use strict';

function Main(input) {
	let N = BigInt(input);

	const op = [];
	while (true) {
		if (N % 2n == 0) {
			op.push('B');
			N /= 2n;
		} else {
			op.push('A');
			N -= 1n;
		}
		if (N == 0) {
			break;
		}
	}

	console.log(op.reverse().join(''));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
