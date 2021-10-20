'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);
	const tbl = [];

	for (let i = 0; i < H; i++) {
		const tmp = input[i + 1].split('');
		tbl.push(tmp);
	}

	let block = 0;
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			if (tbl[i][j] === '#') block++;
		}
	}

	const q = [[0, 0]];
	tbl[0][0] = 1;
	const d = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	while (q.length > 0) {
		const here_y = q[0][0];
		const here_x = q[0][1];
		for (let i = 0; i < 4; i++) {
			const next_y = here_y + d[i][0];
			const next_x = here_x + d[i][1];
			if (next_y >= H || next_y < 0 || next_x >= W || next_x < 0) {
				continue;
			} else {
				if (tbl[next_y][next_x] === '.') {
					tbl[next_y][next_x] = tbl[here_y][here_x] + 1;
					q.push([next_y, next_x]);
				}
			}
		}
		q.shift();
	}

	const g = tbl[H - 1][W - 1];
	const ans = isNaN(g) ? -1 : H * W - g - block;

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
