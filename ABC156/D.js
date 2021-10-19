'use strict';

function Main(input) {
	const [n, a, b] = input.split(' ').map(BigInt);
	const mod = 10n ** 9n + 7n;

	let ans = powMod(2n, n, mod) - 1n;
	ans -= nCrMod(n, a, mod);
	ans -= nCrMod(n, b, mod);

	ans %= mod;

	if (ans < 0) {
		ans += mod;
	}
	console.log(ans.toString());
}

function powMod(a, n, b) {
	if (n == 1) {
		return a;
	}

	if (n % 2n == 1) {
		return (a * powMod(a, n - 1n, b)) % b;
	}

	let res = powMod(a, n / 2n, b);
	res = (res * res) % b;

	return res;
}

function nCrMod(n, r, mod) {
	let res = 1n;
	for (let i = n - r + 1n; i <= n; i++) {
		res *= i;
		res %= mod;
	}

	for (let i = 2n; i <= r; i++) {
		res *= powMod(i, mod - 2n, mod);
		res %= mod;
	}

	res %= mod;

	if (res < 0) {
		res += mod;
	}

	return res;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
