'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, N] = input[0].split(' ').map(Number);
	const ary = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		ary.push(tmp);
	}

	const dp = generate2DArray(N + 1, H + 1, Infinity);
	dp[0][0] = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j <= H; j++) {
			dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j]);
			dp[i + 1][Math.min(j + ary[i][0], H)] = Math.min(dp[i + 1][Math.min(j + ary[i][0], H)], dp[i + 1][j] + ary[i][1]);
		}
	}

	console.log(dp[N][H]);
}

function generate2DArray(m, n, v = 0) {
	return [...Array(m)].map(() => Array(n).fill(v));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
