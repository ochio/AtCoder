'use strict';

function Main(input) {
	input = input.split('\n');
	const N = Number(input[0]);

	const table = [];
	for (let i = 0; i < N; i++) {
		const [S, T] = input[1 + i].split(' ');
		table.push([S, T]);
	}

	for (let i = 0; i < N; i++) {
		for (let j = i + 1; j < N; j++) {
			if (table[i][0] === table[j][0]) {
				if (table[i][1] === table[j][1]) {
					console.log('Yes');
					return;
				}
			}
		}
	}

	console.log('No');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
