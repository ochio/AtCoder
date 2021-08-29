'use strict';

function Main(input) {
	const [X, op] = input.split('.').map(Number);
	if (0 <= op && op <= 2) {
		console.log(String(X) + '-');
	} else if (3 <= op && op <= 6) {
		console.log(String(X));
	} else {
		console.log(String(X) + '+');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
