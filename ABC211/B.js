'use strict';

function Main(input) {
	const S = input.split('\n');
	let ans = 'Yes';

	if (S.indexOf('H') === -1) {
		ans = 'No';
	}
	if (S.indexOf('2B') === -1) {
		ans = 'No';
	}
	if (S.indexOf('3B') === -1) {
		ans = 'No';
	}
	if (S.indexOf('HR') === -1) {
		ans = 'No';
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
