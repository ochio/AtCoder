'use strict';

function Main(input) {
	const S = input.trim();

	const ary = Array(S.length + 1).fill(0);

	for (let i = 0; i < S.length; i++) {
		if (S[i] === '<') ary[i + 1] = Math.max(ary[i + 1], ary[i] + 1);
	}
	for (let i = S.length - 1; i >= 0; i--) {
		if (S[i] === '>') ary[i] = Math.max(ary[i], ary[i + 1] + 1);
	}

	let ans = 0;
	for (let i = 0; i < ary.length; i++) {
		ans += ary[i];
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
