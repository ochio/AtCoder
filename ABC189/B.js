'use strict';

function Main(input) {
	input = input.split('\n');
	let [N, X] = input[0].split(' ').map(Number);
	X *= 100;

	let ans = 0;
	for (let i = 0; i < N; i++) {
		const [V, P] = input[i + 1].split(' ').map(Number);
		X -= V * P;
		if (X < 0) {
			ans = i + 1;
			break;
		}
	}
	console.log(X >= 0 ? -1 : ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
