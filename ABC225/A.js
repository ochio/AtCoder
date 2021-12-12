'use strict';

function Main(input) {
	const S = input.trim().split('');
	const set = new Set(S);

	const size = set.size;
	if (size === 1) {
		console.log(1);
	} else if (size === 2) {
		console.log(3);
	} else {
		console.log(6);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
