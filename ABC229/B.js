'use strict';

function Main(input) {
	const A = input.split(' ')[0].trim().split('').reverse();
	const B = input.split(' ')[1].trim().split('').reverse();
	const td = Math.min(A.length, B.length);

	let ans = 'Easy';
	for (let i = 0; i < td; i++) {
		const sum = Number(A[i]) + Number(B[i]);
		if (sum >= 10) {
			ans = 'Hard';
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
