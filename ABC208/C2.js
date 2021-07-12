'use strict';

function Main(input) {
	input = input.split('\n');
	let [N, K] = input[0].split(' ').map(BigInt);
	const ary = input[1].split(' ').map(Number);
	const sorted = ary.slice().sort((a, b) => a - b);
	const d = K / N;
	const mod = K % N;
	const b = sorted[mod];

	for (let i = 0n; i < N; i++) {
		if (ary[i] < b) {
			console.log((d + 1n).toString());
		} else {
			console.log(d.toString());
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
