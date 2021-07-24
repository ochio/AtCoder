'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(Number);
	const C = (A - B) / 3 + B;
	console.log(C);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
