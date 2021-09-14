'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(Number);
	const g = gcd(A, B);
	const d = primeFactorization(g);

	console.log(d.length + 1);
}

function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

function primeFactorization(v) {
	let value = v;
	let exponent = 0;
	let divisors = [];

	for (let number = 2; number * number <= value; number++) {
		if (value % number === 0) {
			exponent = 0;
			while (value % number === 0) {
				exponent++;
				value /= number;
			}

			divisors.push({ number, exponent });
		}
	}
	if (value !== 1) {
		divisors.push({ number: value, exponent: 1 });
	}

	return divisors;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
