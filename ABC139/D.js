'use strict';

function Main(input) {
	input = input.split('\n');
	const N = BigInt(input[0]);

	const ans = ((N - 1n) * N) / 2n;
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
