'use strict';

function Main(input) {
	input = input.trim().split('\n');
	const N = Number(input[0]);

	const table = Array(N).fill(Array(N).fill(0));

	for (let i = 0; i < N - 1; i++) {
		const [u, v, w] = input[i + 1].split(' ').map(Number);
		console.log(table[u - 1]);
		table[u - 1][v - 1] = w;
	}

	console.log(table);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
