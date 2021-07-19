'use strict';

function Main(input) {
	const S = input.trim();
	let s = 0;
	let t = 0;
	for (let i = 0; i < S.length; i++) {
		if (S[i] === 'B') {
			s++;
		} else {
			t += s;
		}
	}
	console.log(t);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
