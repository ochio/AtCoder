'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const s = new Set();
	for (let i = 0; i < N; i++) {
		s.add(input[i + 1]);
	}
	console.log(s.size);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
