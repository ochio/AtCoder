'use strict';

function Main(input) {
	let [X, K, D] = input.split(' ').map(Number);
	X = Math.abs(X);
	const quo = Math.floor(X / D);
	const remain = Math.floor(X % D);

	let ans = 0;
	if (X > K * D) {
		ans = X - K * D;
	} else if ((K - quo) & 1) {
		ans = Math.abs(remain - D);
	} else {
		ans = Math.abs(remain);
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
