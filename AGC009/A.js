'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	let A = [];
	let B = [];
	for (let i = 0; i < N; i++) {
		const [a, b] = input[1 + i].split(' ').map(Number);
		A.push(a);
		B.push(b);
	}

	let ans = 0;
	for (let i = N - 1; i >= 0; i--) {
		const d = A[i] + ans - B[i];
		const add = d % B[i] === 0 ? 0 : B[i] * Math.floor((B[i] + (d % B[i])) / B[i]) - (d % B[i]);
		ans += add;
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
