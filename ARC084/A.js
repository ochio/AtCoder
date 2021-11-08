'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const A = input[1]
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);
	const B = input[2]
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);
	const C = input[3]
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);

	const m = [];
	for (let i = 0; i < N; i++) {
		const b = B[i];
		const tmp = upperBound(C, b);
		m.push(N - tmp);
	}

	m.reverse();

	const mb = [m[0]];
	for (let i = 1; i < N; i++) {
		mb.push(mb[i - 1] + m[i]);
	}

	let ans = 0;
	mb.reverse();
	for (let i = 0; i < N; i++) {
		const a = A[i];
		const tmp = upperBound(B, a);
		if (tmp >= N) continue;
		ans += mb[tmp];
	}
	console.log(ans);
}

function upperBound(ary, n) {
	let first = 0,
		last = ary.length - 1,
		middle;
	while (first <= last) {
		middle = 0 | ((first + last) / 2);
		if (ary[middle] <= n) first = middle + 1;
		else last = middle - 1;
	}
	return first;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
