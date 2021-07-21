'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	const obj = {};
	for (let i = 0; i < N; i++) {
		if (!obj[ary[i]]) obj[ary[i]] = 1;
		else obj[ary[i]]++;
	}

	let ans = 0;
	for (let p in obj) {
		let max = 0;

		if (obj[+p + 1] != null && obj[+p - 1] != null) {
			max = obj[+p + 1] + obj[p] + obj[+p - 1];
		} else if (obj[+p + 1] != null) {
			max = obj[+p + 1] + obj[p];
		} else if (obj[+p - 1] != null) {
			max = obj[+p - 1] + obj[p];
		} else {
			max = obj[p];
		}

		ans = Math.max(ans, max);
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
