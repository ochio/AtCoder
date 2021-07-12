'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].trim().split(' ').map(Number);
	const m = new Map();

	for (let i = 0; i < N; i++) {
		m.set(ary[i], true);
	}

	console.log(m.size === N ? 'YES' : 'NO');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
