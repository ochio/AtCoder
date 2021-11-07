'use strict';

function Main(input) {
	const X = Number(input);
	console.log(Math.round(X));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
