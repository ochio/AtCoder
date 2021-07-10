'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	const all = Array(N).fill(0);

	for (let i = 0; i < ary.length; i++) {
		all[ary[i] - 1]++;
	}

	console.log(all.join('\n'));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
