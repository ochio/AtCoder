'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	for (let i = 0; i < N; i++) {
		const tmp = Number(input[1 + i]);
		if (tmp % 2 === 1) {
			console.log('first');
			return;
		}
	}

	console.log('second');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
