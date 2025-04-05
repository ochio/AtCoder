'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, S] = [Number(input[0]), input[1]];

	let ans = '';

	for (let i = 0; i < N; i++) {
		ans += S[i] + S[i];
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
