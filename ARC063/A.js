'use strict';

function Main(input) {
	const S = input;

	let c = 0;
	let t = S[0];
	for (let i = 1; i < S.length; i++) {
		if (t === S[i]) {
			continue;
		} else {
			t = S[i];
			c++;
		}
	}
	console.log(c - 1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
