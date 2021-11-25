'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = [];

	let b = 0;
	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		const s = tmp[0] + tmp[1];
		b += tmp[1];
		ary.push(s);
	}

	ary.sort((a, b) => (a - b < 0 ? 1 : -1));
	let T = 0;
	for (let i = 0; i < N; i++) {
		if (i % 2 == 0) {
			T += ary[i];
		}
	}
	console.log(T - b);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
