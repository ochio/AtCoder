'use strict';

function Main(input) {
	const N = Number(input);
	if (1 <= N && N <= 125) {
		console.log(4);
	} else if (126 <= N && N <= 211) {
		console.log(6);
	} else {
		console.log(8);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
