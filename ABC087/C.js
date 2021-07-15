'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const a1 = input[1].split(' ').map(Number);
	const a2 = input[2].split(' ').map(Number);

	let ans = 0;
	for (let i = 0; i < N; i++) {
		const upper = a1.slice(0, i + 1).reduce((p, c) => p + c);
		const lower = a2.slice(i).reduce((p, c) => p + c);

		ans = Math.max(ans, upper + lower);
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
