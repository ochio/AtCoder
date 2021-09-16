'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1].split('');

	let ans = 0;
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			for (let k = 0; k < 10; k++) {
				const v = String(i) + String(j) + String(k);
				ans += search(S, v) ? 1 : 0;
			}
		}
	}
	console.log(ans);
}

function search(S, v) {
	let p = 0;
	let flag = false;
	for (let i = 0; i < S.length; i++) {
		if (S[i] === v[p]) {
			p++;
			if (p > 2) {
				flag = true;
				break;
			}
		}
	}
	return flag;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
