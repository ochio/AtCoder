'use strict';

function Main(input) {
	const [a, b, c] = input.split(' ').map(BigInt);

	let ans = 'No';
	if (c - a - b > 0n && 4n * a * b < (c - a - b) ** 2n) {
		ans = 'Yes';
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
