'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(Number);
	console.log(A ^ B);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
