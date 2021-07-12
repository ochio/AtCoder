'use strict';

function Main(input) {
	input = input.split('\n');
	const O = input[0];
	const E = input[1];

	let ans = '';
	for (let i = 0; i < O.length; i++) {
		ans += O[i];
		if (E[i] != null) {
			ans += E[i];
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
