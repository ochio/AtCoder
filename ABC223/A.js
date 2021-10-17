'use strict';

function Main(input) {
	const X = Number(input);

	const ans = X % 100 === 0 && X > 0 ? 'Yes' : 'No';
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
