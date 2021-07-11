'use strict';

function Main(input) {
	const L = Number(input);
	console.log((L / 3) ** 3);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
