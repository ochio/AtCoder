'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	let S = input[1];

	let l = 0;
	let r = 0;

	let i = 0;
	while (i < S.length) {
		if (S[i] === ')') {
			if (r > 0) {
				r--;
			} else {
				l++;
			}
		} else {
			if (l > 0) {
				const p = '('.repeat(l);
				S = p + S;
				i += l;
				r = 1;
				l = 0;
			} else {
				r++;
			}
		}
		i++;
	}

	const prefix = '('.repeat(l);
	const suffix = ')'.repeat(r);
	console.log(prefix + S + suffix);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
