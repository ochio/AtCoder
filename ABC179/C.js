'use strict';

function Main(input) {
	const N = Number(input);

	let ans = 0;
	for (let i = 1; i < N; i++) {
		for (let j = 1; j <= (N - 1) / i; j++) {
			ans++;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
