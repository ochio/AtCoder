'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K, Q] = input[0].split(' ').map(Number);
	const ary = Array(N).fill(0);

	for (let i = 0; i < Q; i++) {
		const idx = Number(input[1 + i] - 1);
		ary[idx]++;
	}

	ary.forEach((v) => {
		if (K - Q + v > 0) {
			console.log('Yes');
		} else {
			console.log('No');
		}
	});
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
