'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, A, B] = input[0].split(' ').map(Number);
	const X = input[1].split(' ').map(Number);

	const b = Math.ceil(B / A);

	let ans = 0;
	for (let i = 1; i < N; i++) {
		const d = X[i] - X[i - 1];
		if (d >= b) {
			ans += B;
		} else {
			ans += A * d;
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
