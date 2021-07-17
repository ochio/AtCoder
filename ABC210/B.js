'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = Array(...input[1].trim());

	let ans = 'Takahashi';
	for (let i = 0; i < N; i++) {
		if (S[i] === '1') {
			ans = i % 2 === 0 ? 'Takahashi' : 'Aoki';
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
