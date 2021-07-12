'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1]
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < N - K; i++) {
		sum += ary[i];
	}

	console.log(sum);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
