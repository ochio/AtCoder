'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W, N] = input[0].split(' ').map(Number);

	const A = [];
	const B = [];

	for (let i = 0; i < N; i++) {
		const [a, b] = input[1 + i].split(' ').map(Number);
		A.push(a);
		B.push(b);
	}

	const set_a = new Set(A);
	const ord_a = Array.from(set_a);
	ord_a.sort((a, b) => a - b);

	const set_b = new Set(B);
	const ord_b = Array.from(set_b);
	ord_b.sort((a, b) => a - b);

	for (let i = 0; i < N; i++) {
		console.log(binary(ord_a, A[i]) + 1, binary(ord_b, B[i]) + 1);
	}
}

function binary(a, searchValue) {
	let index = -1;

	let left = 0;
	let right = a.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (a[middle] == searchValue) {
			index = middle;
			break;
		} else if (a[middle] < searchValue) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return index;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
