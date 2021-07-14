'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const v = input[1].split(' ').map(Number);
	v.sort((a, b) => a - b);

	for (let i = 0; i < N - 1; i++) {
		const mix = (v[0] + v[1]) / 2;
		v.shift();
		v.shift();
		v.push(mix);
		v.sort((a, b) => a - b);
	}

	console.log(v[0]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
