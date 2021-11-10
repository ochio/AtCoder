'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const b = ary.map((v, i) => v - i);
	b.sort((a, b) => a - b);
	const m = b[Math.floor(N / 2)];
	const ans = b.reduce((p, c) => p + Math.abs(c - m), 0);
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
