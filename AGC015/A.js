'use strict';

function Main(input) {
	const [N, A, B] = input.split(' ').map(BigInt);
	let ans = 0n;
	if (A > B) {
		console.log(ans.toString());
		return;
	}

	if (N === 1n && A !== B) {
		console.log(ans.toString());
		return;
	}

	if (A === B) {
		ans = 1n;
		console.log(ans.toString());
		return;
	}

	const min = (N - 2n) * A + A + B;
	const max = (N - 2n) * B + A + B;

	ans = max - min + 1n;
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
