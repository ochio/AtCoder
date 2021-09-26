'use strict';

function Main(input) {
	const [A, B, C] = input.split(' ').map(Number);
	let ans = -1;

	for (let i = A; i <= B; i++) {
		if (i % C === 0) {
			ans = i;
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
