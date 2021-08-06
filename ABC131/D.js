'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const A = [];
	const B = [];
	for (let i = 0; i < N; i++) {
		const [a, b] = input[i + 1].split(' ').map(Number);
		A.push(a);
		B.push(b);
	}

	const idx = Array(N)
		.fill(0)
		.map((v, i) => i);

	idx.sort((a, b) => {
		return B[a] - B[b];
	});

	let s = 0;
	let ans = 'Yes';
	for (let i = 0; i < N; i++) {
		const tmp = A[idx[i]];
		const tmp2 = B[idx[i]];

		s += tmp;
		if (tmp2 < s) {
			ans = 'No';
			break;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
