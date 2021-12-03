'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, A, B] = input[0].split(' ').map(BigInt);
	const [P, Q, R, S] = input[1].split(' ').map(BigInt);

	const tbl = generate2DArray(Q - P + 1n, S - R + 1n, '.');
	const dh = P - 1n;
	const dw = R - 1n;

	let max1 = 1n - A >= 1n - B ? 1n - A : 1n - B;
	let min1 = N - A <= N - B ? N - A : N - B;
	max1 = max1 >= P - A ? max1 : P - A;
	max1 = max1 >= R - B ? max1 : R - B;
	min1 = min1 <= Q - A ? min1 : Q - A;
	min1 = min1 <= S - B ? min1 : S - B;
	for (let k = max1; k <= min1; k++) {
		if (P <= A + k && A + k <= Q && R <= B + k && B + k <= S) {
			const i = A + k - dh - 1n;
			const j = B + k - dw - 1n;
			tbl[i][j] = '#';
		}
	}

	let max2 = 1n - A >= B - N ? 1n - A : B - N;
	let min2 = N - A <= B - 1n ? N - A : B - 1n;
	max2 = max2 >= P - A ? max2 : P - A;
	max2 = max2 >= B - S ? max2 : B - S;
	min2 = min2 <= Q - A ? min2 : Q - A;
	min2 = min2 <= B - R ? min2 : B - R;
	for (let k = max2; k <= min2; k++) {
		if (P <= A + k && A + k <= Q && R <= B - k && B - k <= S) {
			const i = A + k - dh - 1n;
			const j = B - k - dw - 1n;
			tbl[i][j] = '#';
		}
	}

	for (let i = 0n; i < tbl.length; i++) {
		console.log(tbl[i].join(''));
	}
}

function generate2DArray(m, n, v = 0) {
	(m = Number(m)), (n = Number(n));
	return [...Array(m)].map(() => Array(n).fill(v));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
