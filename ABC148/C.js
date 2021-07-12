'use strict';

function Main(input) {
	const [A, B] = input.split(' ');
	console.log(lcm(A, B));
}

function lcm(a, b) {
	return a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b);
}
function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
