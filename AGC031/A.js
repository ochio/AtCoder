'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1];
	const d = 10 ** 9 + 7;

	const obj = {};
	for (let i = 0; i < N; i++) {
		obj[S[i]] = obj[S[i]] == null ? 1 : ++obj[S[i]];
	}

	let ans = 1;
	for (let p in obj) {
		ans *= obj[p] + 1;
		ans %= d;
	}
	console.log((ans - 1) % d);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
