'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);
	const p = input[1].split(' ').map(Number);

	const ans = Array(N - 1).fill(0);
	for (let i = 0; i < N; i++) {
		const tmp = p[i];
		ans[tmp - 1] = i + 1;
	}

	console.log(ans.join(' '));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
