'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(Number);
	console.log(B - A + 1 <= 0 ? 0 : B - A + 1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
