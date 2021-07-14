'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	let ans = 0;
	for (let i = 0; i < N; i++) {
		if (i === 0) {
			ans += ary[0];
		} else if (i === N - 1) {
			ans += ary[i - 1];
		} else {
			ans += Math.min(ary[i], ary[i - 1]);
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
