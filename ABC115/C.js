'use strict';

function Main(input) {
	input = input.trim().split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	input.shift();
	const sorted = input.sort((a, b) => a - b);

	let min = 10000000000;
	for (let i = 0; i <= N - K; i++) {
		if (min > sorted[i + K - 1] - sorted[i]) {
			min = sorted[i + K - 1] - sorted[i];
		}
	}

	console.log(min);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
