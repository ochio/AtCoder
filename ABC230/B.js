'use strict';

function Main(input) {
	const S = input.trim();
	const T = 'oxx'.repeat(100);
	const ans = T.indexOf(S) !== -1 ? 'Yes' : 'No';
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
