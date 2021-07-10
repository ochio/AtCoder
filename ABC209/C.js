'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].trim().split(' ').map(Number);
	ary.sort((a, b) => a - b);
	const d = BigInt(10 ** 9 + 7);

	let ans = 1n;
	for (let i = 0; i < N; i++) {
		if (ary[i] - i <= 0) {
			ans = 0;
			break;
		}
		ans *= BigInt(ary[i] - i);
		ans %= d;
	}
	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
