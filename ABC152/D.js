'use strict';

function Main(input) {
	const N = Number(input);

	const ary = generate2DArray(10, 10, 0);

	for (let i = 1; i < N + 1; i++) {
		const btm = i % 10;
		let top = -1;
		let x = i;

		while (0 < x) {
			top = x % 10;
			x = Math.floor(x / 10);
		}

		ary[top][btm]++;
	}

	let ans = 0;
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			ans += ary[i][j] * ary[j][i];
		}
	}

	console.log(ans);
}

function generate2DArray(m, n, v = 0) {
	return [...Array(m)].map(() => Array(n).fill(v));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
