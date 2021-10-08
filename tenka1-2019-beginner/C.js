'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1].split('');

	let w = 0;
	for (let i = 0; i < N; i++) {
		if (S[i] === '.') {
			w += 1;
		}
	}

	let ans = w;
	let b_l = 0;
	let w_r = w;
	for (let i = 0; i < N; i++) {
		if (S[i] === '.') {
			w_r -= 1;
		} else {
			b_l += 1;
		}
		ans = Math.min(ans, w_r + b_l);
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
