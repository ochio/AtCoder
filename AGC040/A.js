'use strict';

function Main(input) {
	const S = input.trim();

	let l = 0;
	let m = 0;
	let ans = 0;
	for (let i = 0; i < S.length; i++) {
		if (S[i] === '>') {
			ans += Math.max(m, l);
			m = 0;
			l++;
		} else if (S[i] === '<') {
			ans += Math.max(m, l);
			l = 0;
			m++;
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
