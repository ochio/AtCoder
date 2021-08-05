'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const c = ary.slice();
	c.sort((a, b) => a - b);

	const left = c[N / 2 - 1];
	const right = c[N / 2];

	for (let i = 0; i < N; i++) {
		const ans = ary[i] <= left ? right : left;
		console.log(ans);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
