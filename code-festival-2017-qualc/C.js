'use strict';

function Main(input) {
	let S = input.trim();

	let ans = 0;
	while (S.length > 0) {
		const s = S[0];
		const e = S[S.length - 1];
		if (s === e) {
			S = S.slice(1, S.length - 1);
		} else {
			if (s === 'x') {
				S = S + 'x';
				ans++;
			} else if (e === 'x') {
				S = 'x' + S;
				ans++;
			} else {
				ans = -1;
				break;
			}
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
