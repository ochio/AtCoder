'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(BigInt);
	let s = ary.reduce((p, c) => p + c);

	let ans = 0n;
	for (let i = 0; i < N - 1; i++) {
		s -= ary[i];
		ans += BigInt(ary[i]) * BigInt(s);
	}

	const d = BigInt(10 ** 9 + 7);

	console.log((ans % d).toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
