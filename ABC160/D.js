'use strict';

function Main(input) {
	const [N, X, Y] = input.split(' ').map(Number);

	const ans = Array(N - 1).fill(0);
	for (let i = 1; i <= N; i++) {
		for (let j = i + 1; j <= N; j++) {
			const tmp = Math.min(j - i, Math.abs(i - X) + 1 + Math.abs(Y - j));
			ans[tmp - 1]++;
		}
	}

	console.log(ans.join('\n'));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
