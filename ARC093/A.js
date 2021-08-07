'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	ary.push(0);
	ary.unshift(0);

	const d = [];
	for (let i = 0; i < N + 1; i++) {
		let tmp = Math.abs(ary[i] - ary[i + 1]);
		d.push(tmp);
	}

	const sum = d.reduce((a, b) => a + b);

	for (let i = 1; i < N + 1; i++) {
		console.log(sum - (d[i - 1] + d[i]) + Math.abs(ary[i - 1] - ary[i + 1]));
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
