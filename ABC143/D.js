'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);

	ary.sort((a, b) => a - b);
	let ans = 0;
	for (let i = 0; i < N; i++) {
		for (let j = i + 1; j < N; j++) {
			const a = ary[i] + ary[j];
			ans += lowerBound(ary, a) - (j + 1);
		}
	}

	console.log(ans);
}

function lowerBound(ary, n) {
	let first = 0,
		last = ary.length - 1,
		middle;
	while (first <= last) {
		middle = 0 | ((first + last) / 2);
		if (ary[middle] < n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
