'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let max = 0;
	let ans = 0;
	for (let i = 0; i < N; i++) {
		if (max < ary[i]) {
			max = ary[i];
		}
		ans += max - ary[i];
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
