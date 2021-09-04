'use strict';

function Main(input) {
	const S = input.trim();
	const N = S.length;
	const dp = generate2DArray(20, N);

	for (let i = 0; i < N; i++) {
		if (S[i] === 'R') dp[0][i] = i + 1;
		else dp[0][i] = i - 1;
	}

	for (let i = 0; i < 19; i++) {
		for (let j = 0; j < N; j++) {
			dp[i + 1][j] = dp[i][dp[i][j]];
		}
	}

	const ans = Array(N).fill(0);
	for (let i = 0; i < N; i++) {
		ans[dp[19][i]]++;
	}

	console.log(ans.join(' '));
}
function generate2DArray(m, n) {
	return [...Array(m)].map(() => Array(n).fill(0));
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
