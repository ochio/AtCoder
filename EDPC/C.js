'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const dp = generate2DArray(N + 1, 3, 0);
	const act = [];
	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		act.push(tmp);
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < 3; j++) {
			for (let k = 0; k < 3; k++) {
				if (j !== k) {
					dp[i + 1][k] = Math.max(dp[i + 1][k], dp[i][j] + act[i][k]);
				}
			}
		}
	}

	let ans = 0;
	for (let i = 0; i < 3; i++) {
		ans = Math.max(ans, dp[N][i]);
	}
	console.log(ans);
}
function generate2DArray(m, n, v) {
	return [...Array(m)].map(() => Array(n).fill(v));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
