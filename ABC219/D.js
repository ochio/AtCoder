'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const [X, Y] = input[1].split(' ').map(Number);
	const dp = generate2DArray(300, 300);

	let SUM_A = 0;
	let SUM_B = 0;
	for (let i = 0; i < N; i++) {
		const [a, b] = input[2 + i].split(' ').map(Number);
		for (let j = 1; j < 300; j++) {
			if (j - a >= 0) {
				dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j - a] + b);
			}
			dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);
		}

		SUM_A += a;
		SUM_B += b;
	}

	if (SUM_A < X || SUM_B < Y) {
		console.log(-1);
		return;
	}

	let ans = 0;

	for (let i = 0; i < 300; i++) {
		for (let j = 0; j < 300; j++) {
			if (dp[i][j] >= Y) {
				ans = i;
				break;
			}
		}
	}
	console.log(ans - 1);
}

function generate2DArray(m, n) {
	return [...Array(m)].map(() => Array(n).fill(0));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
