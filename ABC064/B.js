'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	ary.sort((a, b) => a - b);
	console.log(ary[N - 1] - ary[0]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
