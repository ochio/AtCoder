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

	let ans = 10000000001;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			const tmp = i === j ? A[i] + B[j] : Math.max(A[i], B[j]);
			ans = Math.min(ans, tmp);
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
