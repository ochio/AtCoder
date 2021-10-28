'use strict';

function Main(input) {
	const N = Number(input);
	const lim = Math.sqrt(N);

	let ans = 0;
	for (let i = 1; i < lim; i++) {
		const tmp = (N - i) / i;
		const f = Math.floor(N / tmp) === N % tmp;
		if (Number.isInteger(tmp) && f) {
			ans += tmp;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
