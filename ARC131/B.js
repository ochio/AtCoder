'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);

	const tbl = [];
	for (let i = 0; i < H; i++) {
		const tmp = input[1 + i].split('').map((v) => {
			if (v !== '.') {
				return Number(v);
			} else {
				return v;
			}
		});

		tbl.push(tmp);
	}

	const dh = [-1, 1];
	const dw = [-1, 1];

	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			const p = tbl[i][j];
			if (p !== '.') continue;

			const lst = {
				1: false,
				2: false,
				3: false,
				4: false,
				5: false,
			};

			for (let k = 0; k < 2; k++) {
				if (0 <= i + dh[k] && i + dh[k] < H) {
					if (tbl[i + dh[k]][j] !== '.') {
						lst[tbl[i + dh[k]][j]] = true;
					}
				}
			}

			for (let k = 0; k < 2; k++) {
				if (0 <= j + dw[k] && j + dw[k] < W) {
					if (tbl[i][j + dw[k]] !== '.') {
						lst[tbl[i][j + dw[k]]] = true;
					}
				}
			}

			for (let k = 1; k <= 5; k++) {
				if (!lst[k]) {
					tbl[i][j] = k;
					break;
				}
			}
		}
	}

	for (let i = 0; i < H; i++) {
		console.log(tbl[i].join(''));
	}
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
