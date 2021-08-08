'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const c = ary.slice();
	c.sort((a, b) => a - b);

	const b = c[N - 2];

	console.log(ary.indexOf(b) + 1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
