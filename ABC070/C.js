'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	if (N === 1) {
		console.log(BigInt(input[1]).toString());
		return;
	}

	let l = BigInt(input[1]);
	for (let i = 1; i < N; i++) {
		l = lcm(l, BigInt(input[i + 1]));
	}
	console.log(l.toString());
}

function lcm(a, b) {
	return a === 0 || b === 0 ? 0 : (a * b) / gcd(a, b);
}
function gcd(a, b) {
	return b == 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
