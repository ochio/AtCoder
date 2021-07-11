'use strict';

function Main(input) {
	input = input.split('\n');
	const [K, N] = input[0].split(' ').map(Number);
	const ary = input[1].split(' ').map(Number);
	ary.push(K + ary[0]);

	let max = 0;
	for (let i = 0; i < N; i++) {
		if (ary[i + 1] - ary[i] > max) {
			max = ary[i + 1] - ary[i];
		}
	}

	console.log(K - max);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
