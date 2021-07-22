'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);

	const ary = [];

	for (let i = 0; i < H; i++) {
		const tmp = input[i + 1].split('');
		ary.push(tmp);
	}

	let ans = 'Yes';
	const dx = [-1, 1];
	const dy = [-1, 1];
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			if (ary[i][j] === '.') continue;
			const r_x = dx.some((v) => {
				return 0 <= j + v && j + v <= W - 1 && ary[i][j + v] === '#';
			});
			const r_y = dy.some((v) => {
				return 0 <= i + v && i + v <= H - 1 && ary[i + v][j] === '#';
			});
			if (r_x === false && r_y === false) {
				ans = 'No';
				break;
			}
		}
	}
	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
