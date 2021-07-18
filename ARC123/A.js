'use strict';

function Main(input) {
	input = input.split('\n');
	const [A, B, C] = input[0].split(' ').map(Number);

	const X = 2 * B - A - C;
	const k = Math.max(0, Math.ceil(-X / 2));

	const ans = X + 3 * k;

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
