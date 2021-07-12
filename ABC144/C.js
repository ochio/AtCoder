'use strict';

function Main(input) {
	const N = Number(input);

	let min = [];
	for (let i = 1; i <= Math.sqrt(N); i++) {
		if (N % i === 0) {
			min.push(i - 1 + (N / i - 1));
		}
	}

	console.log(Math.min(...min));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
