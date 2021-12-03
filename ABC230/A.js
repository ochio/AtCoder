'use strict';

function Main(input) {
	let N = Number(input);
	if (N >= 42) {
		N++;
	}

	console.log('AGC' + String(N).padStart(3, '0'));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
