'use strict';

function Main(input) {
	const L = Number(input);
	console.log(nCr(BigInt(L - 1n), BigInt(11)).toString());
}

function nCr(n, r) {
	let ans = BigInt(1);
	for (let i = n; i > n - r; i--) {
		ans *= i;
	}
	if (r == 0) {
		ans = BigInt(1);
		return ans;
	}
	for (let i = r; i > 0; i--) {
		ans /= i;
	}
	return ans;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
