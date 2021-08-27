'use strict';

function Main(input) {
	const [A, B, X] = input.split(' ').map(BigInt);

	function cal(N) {
		return A * N + B * BigInt(String(N).length);
	}

	let start = 0n;
	let end = 10n ** 9n + 1n;
	while (start + 1n !== end) {
		const middle = (start + end) / 2n;
		if (cal(middle) <= X) {
			start = middle;
		} else {
			end = middle;
		}
	}
	console.log(start.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
