'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
	const tbl = Array(M + 1).fill(true);
	const primes = [];
	function primeFactorization(v) {
		let value = v;
		let exponent = 0;

		for (let number = 2; number * number <= value; number++) {
			if (value % number === 0) {
				exponent = 0;
				while (value % number === 0) {
					exponent++;
					value /= number;
				}

				primes.push(number);
			}
		}
		if (value !== 1) {
			primes.push(value);
		}
	}

	for (let i = 0; i < N; i++) {
		primeFactorization(ary[i]);
	}

	tbl[0] = false;
	const p = Array.from(new Set(primes));

	for (let i = 0; i < p.length; i++) {
		for (let j = p[i]; j <= M; j += p[i]) {
			tbl[j] = false;
		}
	}

	const sum = tbl.filter((v) => v).length;
	console.log(sum);
	for (let i = 0; i <= M; i++) {
		if (tbl[i]) {
			console.log(i);
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
