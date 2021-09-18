'use strict';

function Main(input) {
	const x = Number(input);

	if (0 <= x && x < 40) {
		console.log(40 - x);
	} else if (40 <= x && x < 70) {
		console.log(70 - x);
	} else if (70 <= x && x < 90) {
		console.log(90 - x);
	} else {
		console.log('expert');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
