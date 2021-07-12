'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	let l = 0,
		r = 100000;
	for (let i = 0; i < M; i++) {
		const [L, R] = input[i + 1].split(' ').map(Number);
		l = Math.max(L, l);
		r = Math.min(R, r);
	}
	if (l > r) {
		console.log(0);
	} else {
		console.log(r - l + 1);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
