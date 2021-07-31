'use strict';

function Main(input) {
	input = input.split('\n');
	const [A, B] = input[0].split(' ').map(Number);

	if (0 < A && B === 0) {
		console.log('Gold');
	} else if (A === 0 && 0 < B) {
		console.log('Silver');
	} else {
		console.log('Alloy');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
