'use strict';

function Main(input) {
	let N = BigInt(input);

	let ans = 0n;
	if (N % 2n == 1) {
		console.log(ans.toString());
		return;
	}

	ans += N / 10n;
	N /= 10n;

	let i = 1n;
	while (5n ** i <= N) {
		ans += N / 5n ** i;
		i++;
	}
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
