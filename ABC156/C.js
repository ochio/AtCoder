'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let av = ary.reduce((a, b) => a + b) / N;

	let ans1 = 0;
	for (let i = 0; i < N; i++) {
		ans1 += (ary[i] - Math.ceil(av)) ** 2;
	}

	let ans2 = 0;
	for (let i = 0; i < N; i++) {
		ans2 += (ary[i] - Math.floor(av)) ** 2;
	}

	console.log(ans1 <= ans2 ? ans1 : ans2);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
