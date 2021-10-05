'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W, K] = input[0].split(' ').map(Number);

	const cake = [];
	let index = 1;
	for (let i = 0; i < H; i++) {
		const tmp = input[1 + i].split('').map((v) => {
			if (v === '#') {
				return index++;
			} else {
				return v;
			}
		});
		cake.push(tmp);
	}

	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			const p = cake[i][j];
			if (p === '.' && j - 1 >= 0) {
				cake[i][j] = cake[i][j - 1];
			}
		}
	}

	for (let i = 0; i < H; i++) {
		for (let j = W - 1; j > -1; j--) {
			const p = cake[i][j];
			if (p === '.' && j + 1 < W) {
				cake[i][j] = cake[i][j + 1];
			}
		}
	}

	for (let j = 0; j < W; j++) {
		for (let i = 0; i < H; i++) {
			const p = cake[i][j];
			if (p === '.' && i - 1 >= 0) {
				cake[i][j] = cake[i - 1][j];
			}
		}
	}

	for (let j = 0; j < W; j++) {
		for (let i = H - 1; i > -1; i--) {
			const p = cake[i][j];
			if (p === '.' && i + 1 < H) {
				cake[i][j] = cake[i + 1][j];
			}
		}
	}

	console.log(cake.map((v) => v.join(' ')).join('\n'));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
