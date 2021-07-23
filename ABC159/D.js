'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const obj = {};
	const c = {};

	for (let i = 0; i < N; i++) {
		if (obj[ary[i]] == null) obj[ary[i]] = 1;
		else obj[ary[i]]++;

		if (c[ary[i]] == null) c[ary[i]] = 0;
		c[ary[i]] += obj[ary[i]] - 1;
	}

	let sum = 0;
	for (let p in c) {
		sum += c[p];
	}

	for (let i = 0; i < N; i++) {
		const tmp = obj[ary[i]] - 1;
		console.log(sum - tmp);
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
