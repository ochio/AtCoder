'use strict';

function Main(input) {
	input = input.trim();
	const N = Number(input);

	for (let bit = 0; bit < 1 << (input.length - 1); bit++) {
		for (let i = 0; i < input.length - 1; i++) {
			console.log(i);
		}
	}
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
