'use strict';

function Main(input) {
	input = input.split('\n');
	let [S, T] = input;

	let ans = 'No';
	for (let i = 0; i < S.length; i++) {
		const f = S.charAt(0);
		S = S.slice(1) + f;
		if (S === T) {
			ans = 'Yes';
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
