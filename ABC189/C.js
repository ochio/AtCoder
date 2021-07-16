'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let ans = 0;
	for (let i = 0; i < N; i++) {
		let x = ary[i];
		for (let j = i; j < N; j++) {
			x = Math.min(x, ary[j]);
			ans = Math.max(ans, x * (j - i + 1));
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
