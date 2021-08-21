'use strict';

function Main(input) {
	const S = input.trim();
	if (S === 'Hello,World!') {
		console.log('AC');
	} else {
		console.log('WA');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
