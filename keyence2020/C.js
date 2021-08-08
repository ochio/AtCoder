'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K, S] = input[0].split(' ').map(Number);

	let a = [],
		b = [];
	if (S < 10 ** 9) {
		for (let i = 0; i < K; i++) {
			a.push(S.toString());
		}
		for (let i = K; i < N; i++) {
			b.push((S + 1).toString());
		}
	} else {
		for (let i = 0; i < K; i++) {
			a.push(S.toString());
		}
		for (let i = K; i < N; i++) {
			b.push((1).toString());
		}
	}
	console.log(a.join(' ') + ' ' + b.join(' '));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
