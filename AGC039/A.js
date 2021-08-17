'use strict';

function Main(input) {
	input = input.split('\n');
	const S = input[0];
	const K = Number(input[1]);

	if (S.length === 1) {
		console.log(Math.floor(K / 2));
		return;
	}

	const same = Array.from(S).every((v) => {
		return S[0] === v;
	});
	if (same) {
		console.log(Math.floor((S.length * K) / 2));
		return;
	}

	let f1 = 0;
	let f = false;
	for (let i = 0; i < S.length; i++) {
		if (!f && S[i] === S[i + 1]) {
			f = true;
			f1++;
		} else {
			f = false;
		}
	}

	let f2 = 0;
	f = false;
	const s = S.repeat(2);
	for (let i = 0; i < s.length; i++) {
		if (!f && s[i] === s[i + 1]) {
			f = true;
			f2++;
		} else {
			f = false;
		}
	}
	const c = f2 - f1;

	console.log(f1 + (K - 1) * c);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
