'use strict';

function Main(input) {
	const [N, M] = input.split(' ').map(BigInt);
	let ans = 0n;
	if (N === 2n || M === 2n) {
		ans = 0;
	} else {
		ans = (N - 2n) * (M - 2n);
		if (ans < 0) ans *= -1n;
	}
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
