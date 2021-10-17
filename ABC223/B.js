'use strict';

function Main(input) {
	let S = input.trim();
	const ary = [];

	for (let i = 0; i < S.length; i++) {
		S = S.substring(1) + S[0];
		ary.push(S);
	}

	ary.sort();
	console.log(ary[0]);
	console.log(ary[S.length - 1]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
