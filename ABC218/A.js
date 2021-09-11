'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1].split('');

	if (S[N - 1] === 'o') {
		console.log('Yes');
	} else {
		console.log('No');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
