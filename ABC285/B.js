'use strict';

function Main(input) {
	input = input.split('\n');

	let [N, S] = input;
	N = Number(N);

	for (let i = 1; i <= N - 1; i++) {
		let l = 0;
		for (let k = 1; k + i <= N; k++) {
			if (S[k - 1] === S[k + i - 1]) {
				l = k - 1;
				break;
			} else {
				l = k;
			}
		}
		console.log(l);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
