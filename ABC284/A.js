'use strict';

function Main(input) {
	input = input.split('\n');

	for (let i = Number(input[0]); i > 0; i--) {
		console.log(input[i]);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
