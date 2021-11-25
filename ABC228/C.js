'use strict';

function Main(input) {
	input = input.split('\n');
	const [N, K] = input[0].split(' ').map(Number);
	const tbl = [];

	for (let i = 0; i < N; i++) {
		const tmp = input[1 + i]
			.split(' ')
			.map(Number)
			.reduce((a, b) => a + b, 0);
		tbl.push(tmp);
	}

	const copy = tbl.slice().sort((a, b) => (a - b < 0 ? 1 : -1));

	const ad = 300;
	const s = copy[K - 1];

	for (let i = 0; i < N; i++) {
		const d = s - tbl[i];
		if (d > ad) {
			console.log('No');
		} else {
			console.log('Yes');
		}
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
