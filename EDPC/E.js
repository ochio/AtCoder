'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, W] = input[0].split(' ').map(Number);

	const dp = generate2DArray(10 ** 2 + 1, 10 ** 5 + 1);
	dp[0][0] = 0;

	for (let i = 0; i < N; i++) {
		const [w, v] = input[1 + i].split(' ').map(Number);
		for (let j = 0; j <= 10 ** 5 + 1; j++) {
			if (j - v >= 0) {
				dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j - v] + w);
			}
			dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j]);
		}
	}

	let ans = 0;
	for (let i = 0; i < 10 ** 5 + 1; i++) {
		if (dp[N][i] <= W) {
			ans = i;
		}
	}

	console.log(ans);
}

function generate2DArray(m, n) {
	return [...Array(m)].map(() => Array(n).fill(10 ** 9 + 1));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
