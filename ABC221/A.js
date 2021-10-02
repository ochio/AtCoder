'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(Number);
	const d = A - B;
	const ans = 32 ** d;
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
