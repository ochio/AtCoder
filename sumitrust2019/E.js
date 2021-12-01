'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(BigInt);
	const mod = 1000000007n;
	let ans = 1n;

	const tbl = Array(N + 1)
		.fill(0)
		.reduce((acc, record, index) => {
			acc[index - 1] = 0n;
			return acc;
		}, {});

	tbl[-1] = 3n;
	for (let i = 0n; i < N; i++) {
		const n = tbl[ary[i] - 1n];
		ans *= n;
		tbl[ary[i] - 1n]--;
		tbl[ary[i]]++;
	}

	console.log((ans % mod).toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
