'use strict';

function Main(input) {
	const [n, a, b] = input.split(' ').map(BigInt);
	const mod = 10n ** 9n + 7n;

	let ans = powMod(2n, n, mod) - 1n;
	ans -= count(a);
	ans -= count(b);

	function count(x) {
		let res = 1n;
		for (let i = 0n; i < x; i++) {
			res *= n - i;
		}
		for (let i = 1n; i < x + 1n; i++) {
			res /= i;
		}
		return res;
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

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
