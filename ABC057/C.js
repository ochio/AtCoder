'use strict';

function Main(input) {
	const N = Number(input);
	const sq = Math.sqrt(N);

	let ans = 0;
	for (let i = Math.floor(sq); i > -1; i--) {
		if (N % i === 0) {
			const d = N / i;
			ans = Math.max(String(d).length, String(i).length);
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
