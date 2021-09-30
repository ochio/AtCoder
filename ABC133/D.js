'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let r = ary.reduce((a, b) => a + b);
	const tbl = Array(N).fill(0);
	for (let i = 0; i < N - 1; i += 2) {
		r -= ary[i] * 2;
	}

	tbl[N - 1] = r;
	for (let i = N - 2; i > -1; i--) {
		tbl[i] = ary[i] * 2 - tbl[i + 1];
	}

	console.log(tbl.join(' '));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
