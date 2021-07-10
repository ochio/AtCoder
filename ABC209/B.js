'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, X] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
	const p = ary.reduce((p, c) => p + c) - Math.floor(N / 2);
	console.log(X < p ? 'No' : 'Yes');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
