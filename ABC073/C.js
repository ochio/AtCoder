'use strict';

function Main(input) {
	input = input.trim().split('\n');
	const N = Number(input[0]);
	input.shift();
	const ary = input.map(Number);

	const obj = {};

	for (let i = 0; i < N; i++) {
		if (obj[ary[i]] == null) obj[ary[i]] = 1;
		else obj[ary[i]]++;
	}

	let ans = 0;
	for (let p in obj) {
		if (obj[p] % 2 === 1) ans++;
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
