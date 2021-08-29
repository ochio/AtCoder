'use strict';

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

function Main(input) {
	const [N, P] = input.split(' ').map(Number);

	const divisors = primeFactorization(P);

	let ans = 1;
	for (let i = 0; i < divisors.length; i++) {
		const { number, exponent } = divisors[i];
		if (exponent >= N) {
			const t = Math.floor(exponent / N);
			ans *= number ** t;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
