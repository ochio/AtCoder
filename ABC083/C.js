'use strict';

function Main(input) {
	const [X, Y] = input.split(' ').map(BigInt);

	let n = X;
	let ans = 0n;
	while (true) {
		n = X * 2n ** ans;
		if (n <= Y) {
			ans++;
		} else {
			break;
		}
	}
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
