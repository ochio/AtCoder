'use strict';

function Main(input) {
	const [A, B] = input.split(' ').map(BigInt);
	let ans = 0n;
	if (A % 2n == 0n && B % 2n == 1n) {
		ans = ((B - A + 1n) / 2n) % 2n == 0n ? 0n : 1n;
	} else if (A % 2n == 0 && B % 2n == 0) {
		ans = ((B - A) / 2n) % 2n == 0n ? 0n ^ B : 1n ^ B;
	} else if (A % 2n == 1n && B % 2n == 1n) {
		ans = ((B - A) / 2n) % 2n == 0n ? 0n ^ A : 1n ^ A;
	} else {
		ans = ((B - A + 2n) / 2n) % 2n == 0n ? 1n ^ A ^ B : A ^ B;
	}

	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
