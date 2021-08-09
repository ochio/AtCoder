'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let min = Math.min(...ary);
	for (let i = 0; i < N; i++) {
		min = Math.min(min, gcd(min, ary[i]));
		if (min === 1) {
			break;
		}
	}

	console.log(min);
}
function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
