'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);
	const N = Number(input[1]);
	const ary = input[2].split(' ').map(Number);

	const tbl = generate2DArray(H, W);
	const num = [];

	for (let i = 0; i < N; i++) {
		const n = ary[i];
		for (let j = 0; j < n; j++) {
			num.push(i + 1);
		}
	}

	let f = true;
	let n = 0;
	for (let i = 0; i < H; i++) {
		if (f) {
			for (let j = 0; j < W; j++) {
				tbl[i][j] = num[n];
				n++;
			}
		} else {
			for (let j = W - 1; j > -1; j--) {
				tbl[i][j] = num[n];
				n++;
			}
		}
		f = !f;
	}

	for (let i = 0; i < H; i++) {
		console.log(tbl[i].join(' '));
	}
}

function generate2DArray(m, n) {
	return [...Array(m)].map(() => Array(n).fill(0));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
