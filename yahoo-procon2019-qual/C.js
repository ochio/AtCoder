'use strict';

function Main(input) {
	let [K, A, B] = input.split(' ').map(BigInt);

	let ans = 1n;
	if (1n >= B - A) {
		ans += K;
	} else {
		K -= A - 1n;
		ans += A - 1n;
		ans += (K / 2n) * (B - A);
		ans = K % 2n === 1n ? 1n + ans : ans;
	}
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
