'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const sum = [0];
	const obj = {
		0: 1,
	};
	for (let i = 0; i < N; i++) {
		sum.push(sum[i] + ary[i]);
		obj[sum[i + 1]] = obj[sum[i + 1]] == null ? 1 : ++obj[sum[i + 1]];
	}

	let ans = 0;
	for (let p in obj) {
		if (obj[p] === 1) continue;
		else {
			ans += (obj[p] * (obj[p] - 1)) / 2;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
