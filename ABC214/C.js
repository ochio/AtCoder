'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1].split(' ').map(Number);
	const T = input[2].split(' ').map(Number);

	let t = T.slice();
	for (let i = 0; i < N; i++) {
		t = t.map((v, i, ary) => {
			const sub_i = i - 1 < 0 ? i - 1 + N : i - 1;
			return ary[sub_i] + S[sub_i] < v ? ary[sub_i] + S[sub_i] : v;
		});
	}
	for (let i = 0; i < N; i++) {
		console.log(t[i]);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
