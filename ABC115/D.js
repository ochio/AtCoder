'use strict';

function Main(input) {
	const [N, X] = input.split(' ').map(BigInt);

	const total = Array(51);
	const patty = Array(51);

	function r(level, x) {
		if (level == 0) return 1n;

		if (x < 1) {
			return 0n;
		}
		x--;

		if (x < total[level - 1n]) return r(level - 1n, x);
		x -= total[level - 1n];

		if (x < 1) return patty[level - 1n] + 1n;
		x--;

		if (x < total[level - 1n]) return patty[level - 1n] + 1n + r(level - 1n, x);
		x -= total[level - 1n];

		return patty[level - 1n] * 2n + 1n;
	}

	total[0] = 1n;
	for (let i = 1n; i <= N; i++) {
		total[i] = total[i - 1n] * 2n + 3n;
	}
	patty[0] = 1n;
	for (let i = 1n; i <= N; i++) {
		patty[i] = patty[i - 1n] * 2n + 1n;
	}

	const ans = r(N, X - 1n);
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
