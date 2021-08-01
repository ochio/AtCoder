'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const h = input[1].split(' ').map(Number);

	const dp = Array(N).fill(10 ** 9);
	dp[0] = 0;

	for (let i = 0; i < N; i++) {
		dp[i + 1] = Math.min(dp[i + 1], dp[i] + Math.abs(h[i] - h[i + 1]));
		dp[i + 2] = Math.min(dp[i + 2], dp[i] + Math.abs(h[i] - h[i + 2]));
	}

	console.log(dp[N - 1]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
