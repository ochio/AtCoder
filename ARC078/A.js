'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let x = 0;
	let y = 0;

	for (let i = 0; i < N; i++) {
		y += ary[i];
	}
	let ans = 10 ** 15;
	for (let i = 0; i < N - 1; i++) {
		x += ary[i];
		y -= ary[i];
		ans = Math.min(ans, Math.abs(x - y));
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
