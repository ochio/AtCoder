'use strict';

function Main(input) {
	input = input.split('\n')[0].split(' ').map(Number);
	const [a, b] = input;
	if (a * 2 === b || a * 2 + 1 === b) {
		console.log('Yes');
	} else {
		console.log('No');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
