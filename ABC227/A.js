'use strict';

function Main(input) {
	let [N, K, A] = input.split(' ').map(Number);

	let i = A - 1;
	while (K > 0) {
		if (i === N) {
			i = 1;
		} else {
			i++;
		}
		K--;
	}
	console.log(i);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
