'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const ary = input[1].split(' ').map(Number);
	const obj = {};
	for (let i = 0; i < N; i++) {
		const idx = ary[i];
		obj[idx] = obj[idx] == null ? 1 : ++obj[idx];
	}

	let r = 0;
	for (let p in obj) {
		if (obj[p] > 1) {
			r += obj[p] - 1;
		}
	}
	const ans = r % 2 === 0 ? N - r : N - r - 1;
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
