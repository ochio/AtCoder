'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W, C, Q] = input[0].split(' ').map(Number);
	const colors = Array(C).fill(0);
	const T = {};
	const Y = {};
	const headW = Array(W).fill(0);
	const headH = Array(H).fill(0);

	for (let i = 0; i < Q; i++) {
		const [t, n, c] = input[1 + i].split(' ').map(Number);
		if (t == 1) {
			Y[c] = W;
			headH[n - 1] = c;
		} else {
			T[c] = H;
			headW[n - 1] = c;
		}
	}

	console.log(T);
	console.log(Y);
}

function generate2DArray(m, n, v = 0) {
	return [...Array(m)].map(() => Array(n).fill(v));
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
