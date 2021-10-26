'use strict';

function Main(input) {
	const S = input.trim();
	const m = S.substr(-3);

	if (m.indexOf('er') !== -1) {
		console.log('er');
	} else {
		console.log('ist');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
