'use strict';

function Main(input) {
	input = input.split('\n');
	let [N, W] = input[0].split(' ').map(BigInt);
	const ary = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i].split(' ').map(BigInt);
		ary.push(tmp);
	}

	ary.sort((a, b) => (a[0] - b[0] < 0 ? 1 : -1));

	let ans = 0n;
	for (let i = 0; i < N; i++) {
		const g = ary[i][1] < W ? ary[i][1] : W;
		ans += ary[i][0] * g;
		W -= g;
		if (W == 0) break;
	}

	console.log(ans.toString());
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
