'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const mod = 10 ** 9 + 7;
	let a = 1;
	for (let i = 0; i < N; i++) {
		a = (a * 9) % mod;
	}
	let b = 1;
	for (let i = 0; i < N; i++) {
		b = (b * 8) % mod;
	}
	let s = 1;
	for (let i = 0; i < N; i++) {
		s = (s * 10) % mod;
	}
	let ans = s - a * 2 + b;
	ans = ans % mod;
	ans = (ans + mod) % mod;

	console.log(ans % mod);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
