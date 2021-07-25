'use strict';

function Main(input) {
	input = input.split('\n');
	let [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	let ans = 0;

	while (N > 0) {
		N -= K;
		if (N > 0) N++;
		ans++;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
