'use strict';

function Main(input) {
	input = input.split('\n');
	let S = input[0];
	const Q = Number(input[1]);

	let t = true;
	for (let i = 0; i < Q; i++) {
		let [T, F, c] = input[i + 2].split(' ');
		if (T === '1') {
			t = !t;
		} else {
			if (F === '1') {
				S = t ? c + S : S + c;
			} else {
				S = t ? S + c : c + S;
			}
		}
	}
	if (t) {
		console.log(S);
	} else {
		console.log(S.split('').reverse().join(''));
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
