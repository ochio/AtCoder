'use strict';

function Main(input) {
	const S = input.trim();
	const t = S.length;

	let ans = 0;
	for (let i = 0; i < t; i++) {
		if (S[i] === 'U') {
			ans += t - 1 - i;
			ans += i * 2;
		} else {
			ans += i;
			ans += (t - 1 - i) * 2;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
