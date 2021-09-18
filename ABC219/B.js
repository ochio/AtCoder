'use strict';

function Main(input) {
	input = input.split('\n');
	const S1 = input[0];
	const S2 = input[1];
	const S3 = input[2];
	const S = [S1, S2, S3];
	const T = input[3];

	let ans = '';
	for (let i = 0; i < T.length; i++) {
		ans += S[Number(T[i]) - 1];
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
