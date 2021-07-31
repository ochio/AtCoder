'use strict';

function Main(input) {
	const [x1, x2, x3, x4] = input.trim().split('').map(Number);

	const c1 = x2 === x1 + 1 || (x1 === 9 && x2 === 0);
	const c2 = x3 === x2 + 1 || (x2 === 9 && x3 === 0);
	const c3 = x4 === x3 + 1 || (x3 === 9 && x4 === 0);

	if (x1 === x2 && x2 === x3 && x3 === x4) {
		console.log('Weak');
	} else if (c1 && c2 && c3) {
		console.log('Weak');
	} else {
		console.log('Strong');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
