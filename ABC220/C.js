'use strict';

function Main(input) {
	input = input.split('\n');
	const N = BigInt(input[0]);
	const ary = input[1].split(' ').map(BigInt);
	const X = BigInt(input[2]);

	const sum = ary.reduce((a, b) => a + b);

	const d = X / sum;

	let ans = d * N;
	let tmp = sum * d;
	for (let i = 0n; i < N; i++) {
		tmp += ary[i];
		ans++;
		if (tmp > X) {
			break;
		}
	}

	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
