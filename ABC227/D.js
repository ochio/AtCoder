'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);

	ary.sort((a, b) => (a - b < 0 ? 1 : -1));

	let ans = 0;
	while (true) {
		if (ary[K - 1] === 0) break;
		ans += ary[K - 1];
		for (let i = 0; i < K; i++) {
			ary[i] -= ary[K - 1];
		}
		ary.sort((a, b) => (a - b < 0 ? 1 : -1));
	}
	console.log(ans);
}

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
Main(require('fs').readFileSync('./test.txt', 'utf8'));
