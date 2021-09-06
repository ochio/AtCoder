'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);

	const dp = generate2DArray(H, W, 10 ** 9);
	const t = [];
	for (let i = 0; i < H; i++) {
		const tmp = input[i + 1].split('');
		t.push(tmp);
	}

	if (t[0][0] === '#') dp[0][0] = 1;
	else dp[0][0] = 0;

	const dx = [1, 0];
	const dy = [0, 1];
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			for (let k = 0; k < 2; k++) {
				const nx = i + dx[k];
				const ny = j + dy[k];
				if (nx >= H || ny >= W) {
					continue;
				}
				let a = 0;
				if (t[nx][ny] === '#' && t[i][j] === '.') {
					a = 1;
				}
				dp[nx][ny] = Math.min(dp[nx][ny], dp[i][j] + a);
			}
		}
	}

	console.log(dp[H - 1][W - 1]);
}

function generate2DArray(m, n, v) {
	return [...Array(m)].map(() => Array(n).fill(v));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
