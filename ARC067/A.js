'use strict';

function Main(input) {
	const N = Number(input);
	const ary = Array(N + 1).fill(0);
	const mod = 10 ** 9 + 7;
	for (let i = N; i > 0; i--) {
		primeFactorization(i, ary);
	}

	const ans = ary.reduce((a, b) => {
		if (b !== 0) {
			a *= b + 1;
			a %= mod;
		}
		return a;
	}, 1);
	console.log(ans % mod);
}

function primeFactorization(v, divisors) {
	let value = v;
	let exponent = 0;

	for (let number = 2; number * number <= value; number++) {
		if (value % number === 0) {
			exponent = 0;
			while (value % number === 0) {
				exponent++;
				value /= number;
			}

			divisors[number] += exponent;
		}
	}
	if (value !== 1) {
		divisors[value] += 1;
	}

	return divisors;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
