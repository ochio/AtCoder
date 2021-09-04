'use strict';

function Main(input) {
	input = input.trim().split('\n');

	if (input.indexOf('ABC') === -1) {
		console.log('ABC');
	} else if (input.indexOf('ARC') === -1) {
		console.log('ARC');
	} else if (input.indexOf('AGC') === -1) {
		console.log('AGC');
	} else if (input.indexOf('AHC') === -1) {
		console.log('AHC');
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
