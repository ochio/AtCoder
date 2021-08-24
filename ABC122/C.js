'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, Q] = input[0].split(' ').map(Number);
	const S = input[1].trim();

	const n = [];
	for (let i = 0; i < N; i++) {
		if (S[i] === 'A' && S[i + 1] === 'C') {
			n.push(i + 1);
		}
	}

	for (let i = 0; i < Q; i++) {
		const [l, r] = input[i + 2].split(' ').map(Number);
		const c = lowerBound(n, r) - lowerBound(n, l);
		console.log(c);
	}
}

function lowerBound(arr, n) {
	let first = 0,
		last = arr.length - 1,
		middle;
	while (first <= last) {
		middle = 0 | ((first + last) / 2);
		if (arr[middle] < n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
