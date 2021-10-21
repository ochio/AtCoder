'use strict';

function Main(input) {
	const [X, Y] = input.split(' ').map(Number);
	const mod = 10 ** 9 + 7;

	const sieve = (max) => {
		const m = Math.ceil(Math.sqrt(max));
		const s = [];
		for (let p = 2; p <= m; p++) if (!s[p]) for (let q = p * p; q <= max; q += p) s[q] = p;
		return s;
	};

	const factors = function* (n, s = sieve(n)) {
		if (n <= 1) return;
		for (; s[n]; n /= s[n]) yield s[n];
		yield n;
	};

	const modpow = (a, b, c) => (b < 1 ? 1 : b & 1 ? (a * modpow(a, b - 1, c)) % c : modpow(a, b >> 1, c) ** 2 % c);

	const nCkMp = (n, k, p, s = sieve(n)) => {
		k = Math.min(k, n - k);
		const a = [];
		for (let i = 0; i < k; i++) {
			for (const f of factors(n - i, s)) a[f] = (a[f] | 0) + 1;
			for (const f of factors(k - i, s)) a[f] = (a[f] | 0) - 1;
		}
		return a.reduce((n, v, k) => (n * modpow(k % p, v, p)) % p, 1);
	};

	for (let i = 0; i < X + 1; i++) {
		let b = X - i;
		if (b % 2 === 1) continue;

		b /= 2;
		if (2 * i + b === Y) {
			console.log(nCkMp(i + b, b, mod));
			return;
		}
	}

	console.log(0);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
