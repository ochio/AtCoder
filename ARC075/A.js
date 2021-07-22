'use strict';

function Main(input) {
	input = input.trim().split('\n').map(Number);
	const N = Number(input[0]);
	input.shift();

	input.sort((a, b) => a - b);

	let sum = input.reduce((p, c) => p + c);

	for (let i = 0; i < N; i++) {
		if (sum % 10 !== 0) break;
		else if (sum % 10 === 0 && input[i] % 10 !== 0) {
			sum -= input[i];
		}
	}
	sum = sum % 10 === 0 ? 0 : sum;
	console.log(sum);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
