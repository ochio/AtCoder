'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(Number);
	let ans = 'Yes';
	if (B > 6 * A || B < 1 * A) {
		ans = 'No';
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
