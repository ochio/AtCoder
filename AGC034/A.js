'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, A, B, C, D] = input[0].split(' ').map(Number);
	let S = input[1].trim();

	if (S.slice(A, D + 1).indexOf('##') !== -1) {
		console.log('No');
		return;
	}

	if (C > D) {
		const s = S.slice(B - 2, D + 1);
		if (s.indexOf('...') !== -1) {
			console.log('Yes');
		} else {
			console.log('No');
		}
		return;
	}

	console.log('Yes');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
