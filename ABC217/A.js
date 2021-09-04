'use strict';

function Main(input) {
	const [S, T] = input.split(' ');

	if (S < T) {
		console.log('Yes');
	} else {
		console.log('No');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
