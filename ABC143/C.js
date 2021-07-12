'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const S = input[1];

	let ans = '';
	for (let i = 0; i <= N - 1; i++) {
		if (S[i] !== S[i + 1]) {
			ans += S[i];
		}
	}

	console.log(ans.length);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
