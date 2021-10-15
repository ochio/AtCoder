'use strict';

function Main(input) {
	let X = input.trim();

	let len = X.length;
	let S_cnt = 0;
	let T_cnt = 0;
	for (let i = 0; i < len; i++) {
		if (X[i] === 'S') {
			S_cnt++;
		} else {
			if (S_cnt > 0) {
				S_cnt--;
			} else {
				T_cnt++;
			}
		}
	}
	console.log(S_cnt + T_cnt);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
