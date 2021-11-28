'use strict';

function Main(input) {
	input = input.split('\n');
	const S1 = input[0];
	const S2 = input[1];

	let ans = 'Yes';
	if (S1 === '.#' && S2 === '#.') {
		ans = 'No';
	} else if (S1 === '#.' && S2 === '.#') {
		ans = 'No';
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
