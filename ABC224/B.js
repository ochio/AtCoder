'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);
	const tbl = [];

	for (let i = 0; i < H; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		tbl.push(tmp);
	}

	let flag = true;
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			const A11 = tbl[i][j];

			for (let k = i + 1; k < H; k++) {
				for (let l = j + 1; l < W; l++) {
					const A22 = tbl[k][l];
					const A21 = tbl[k][j];
					const A12 = tbl[i][l];

					if (A11 + A22 > A21 + A12) {
						flag = false;
						break;
					}
				}
			}
		}
	}

	const ans = flag ? 'Yes' : 'No';

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
