'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, X] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	if (N === 1) {
		console.log(Math.abs(ary[0] - X));
		return;
	}
	let d = 10 ** 9;
	for (let i = 0; i < N; i++) {
		const tmp = Math.abs(X - ary[i]);
		d = Math.min(d, tmp);
	}

	let g = gcd(d, Math.abs(ary[1] - ary[0]));
	for (let i = 0; i < N; i++) {
		const tmp = Math.abs(X - ary[i]);
		g = gcd(g, tmp);
	}
	console.log(g);
}

function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
