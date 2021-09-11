'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, W] = input[0].split(' ').map(Number);

	const dp = generate2DArray(N + 1, W + 1);

	for (let i = 0; i < N; i++) {
		const [w, v] = input[1 + i].split(' ').map(Number);
		for (let j = 1; j <= W; j++) {
			if (j < w) {
				dp[i + 1][j] = dp[i][j];
			} else {
				dp[i + 1][j] = Math.max(dp[i][j - w] + v, dp[i][j]);
			}
		}
	}
	console.log(dp[N][W]);
}

function generate2DArray(m, n) {
	return [...Array(m)].map(() => Array(n).fill(0));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
