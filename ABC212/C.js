'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, M] = input[0].split(' ').map(Number);
	let A = input[1].split(' ').map(Number);
	let B = input[2].split(' ').map(Number);

	A = Array.from(new Set(A)).sort((a, b) => a - b);
	B = Array.from(new Set(B)).sort((a, b) => a - b);

	let sorted = [];
	let other = [];
	if (A.length > B.length) {
		sorted = A;
		other = B;
	} else {
		sorted = B;
		other = A;
	}

	let ans = 10 ** 9;
	for (let i = 0; i < other.length; i++) {
		const searchValue = other[i];

		let index = -1;

		let left = 0;
		let right = sorted.length - 1;

		let middle = 0;
		while (left <= right) {
			middle = Math.floor((left + right) / 2);

			if (sorted[middle] == searchValue) {
				index = middle;
				break;
			} else if (sorted[middle] < searchValue) {
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}

		const a = middle !== sorted.length - 1 ? Math.abs(sorted[middle + 1] - searchValue) : ans;
		const b = middle !== 0 ? Math.abs(sorted[middle - 1] - searchValue) : ans;
		ans = Math.min(ans, Math.abs(sorted[middle] - searchValue), a, b);
		if (ans === 0) break;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
