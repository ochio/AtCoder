'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const h = input[1].split(' ').map(Number);

	const dp = Array(N).fill(10 ** 9);
	dp[0] = 0;

	for (let i = 0; i < N; i++) {
		for (let j = 1; j <= K; j++) {
			dp[i + j] = Math.min(dp[i + j], dp[i] + Math.abs(h[i] - h[i + j]));
		}
	}

	console.log(dp[N - 1]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
