'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const S = input[1].trim();

	let p = S[0];
	let f = S[0];
	for (let i = 1; i < N; i++) {
		if (f !== S[i]) {
			p += S[i];
			f = S[i];
		}
	}

	let len = p.length;
	for (let i = 0; i < K; i++) {
		if (3 <= len) {
			len -= 2;
		} else if (len === 2) {
			len--;
		}
	}

	console.log(N - len);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
