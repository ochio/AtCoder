'use strict';

function Main(input) {
	const [N, A, X, Y] = input.split(' ').map(Number);

	let ans = 0;
	if (A >= N) {
		ans = N * X;
	} else {
		ans = A * X + (N - A) * Y;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
