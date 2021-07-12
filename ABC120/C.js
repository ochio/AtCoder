'use strict';

function Main(input) {
	const S = input.trim();
	const obj = {
		0: 0,
		1: 0,
	};

	for (let i = 0; i < S.length; i++) {
		if (S[i] === '0') {
			obj[0]++;
		} else {
			obj[1]++;
		}
	}

	const p = Math.min(obj[0], obj[1]);
	console.log(p * 2);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
