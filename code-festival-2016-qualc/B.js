'use strict';

function Main(input) {
	input = input.split('\n');
	const [K, T] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	ary.sort((a, b) => (a - b < 0 ? 1 : -1));

	const max = ary.shift();
	const sum = K - max;

	const ans = Math.max(max - 1 - sum, 0);
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
