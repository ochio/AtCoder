'use strict';

function Main(input) {
	const S = input.trim().split('');
	const t1 = Array(S.length)
		.fill('')
		.map((_, i) => (i % 2 === 0 ? '1' : '0'));
	const t2 = Array(S.length)
		.fill('')
		.map((_, i) => (i % 2 === 0 ? '0' : '1'));

	let c1 = 0;
	for (let i = 0; i < S.length; i++) {
		if (S[i] !== t1[i]) c1++;
	}

	let c2 = 0;
	for (let i = 0; i < S.length; i++) {
		if (S[i] !== t2[i]) c2++;
	}
	console.log(Math.min(c1, c2));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
