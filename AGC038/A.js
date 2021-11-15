'use strict';

function Main(input) {
	const [H, W, A, B] = input.split(' ').map(Number);

	for (let i = 0; i < H; i++) {
		const row = [];
		for (let j = 0; j < W; j++) {
			if (B <= i && A <= j) {
				row.push(0);
			} else if (B <= i && A > j) {
				row.push(1);
			} else if (B > i && A <= j) {
				row.push(1);
			} else {
				row.push(0);
			}
		}
		console.log(row.join(''));
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
