'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const obj = {};

	for (let i = 0; i < N; i++) {
		if (obj[ary[i]] == null) {
			obj[ary[i]] = 1;
		} else {
			obj[ary[i]]++;
		}
	}

	let ans = 0;
	for (let p in obj) {
		if (p == obj[p]) {
			continue;
		} else {
			ans += obj[p] < p ? obj[p] : obj[p] - p;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
