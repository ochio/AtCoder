'use strict';

function Main(input) {
	const N = input.trim();
	console.log(('0000' + N).slice(-4));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
