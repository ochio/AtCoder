'use strict';

function Main(input) {
	const N = Number(input);

	let ans = 0;
	for (let i = 1; i <= Math.sqrt(N); i++) {
		const d = N / i;
		if (d === -1) continue;
		for (let j = i; j <= Math.sqrt(d); j++) {
			ans += Math.floor(d / j) - (j - 1);
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
