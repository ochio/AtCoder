'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
}

function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
