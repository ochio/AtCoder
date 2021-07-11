'use strict';

function Main(input) {
	const K = Number(input);

	let ans = 0;
	for (let a = 1; a <= K; a++) {
		for (let b = 1; b <= K; b++) {
			for (let c = 1; c <= K; c++) {
				ans += gcd(gcd(a, b), c);
			}
		}
	}

	console.log(ans);
}

function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
