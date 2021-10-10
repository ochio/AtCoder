'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const a = input[1].split(' ').map(Number);
	const b = input[2].split(' ').map(Number);
	const mod = 998244353;

	let ans = 1;
	for (let i = 0; i < N; i++) {
		for (let j = a[i]; j <= b[i]; j++) {}
	}
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
