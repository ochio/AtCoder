'use strict';

function Main(input) {
	input = input.split('\n');
	let [N, M] = input[0].split(' ').map(Number);
	let ans = 0;

	if (2 * N <= M) {
		ans += N;
		M -= 2 * N;
		ans += Math.floor(M / 4);
	} else {
		ans += Math.floor(M / 2);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
