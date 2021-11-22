'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);
	const tbl = generate2DArray(H, W, -1);

	const s = [];
	for (let i = 0; i < H; i++) {
		const tmp = input[1 + i].split('');
		s.push(tmp);
	}

	const p = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	const stack = [];
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			const t = s[i][j];
			if (t === '#') {
				stack.push([i, j]);
				tbl[i][j] = 0;
			}
		}
	}

	let current;

	let i = 0;
	while (i < stack.length) {
		current = stack[i];
		const here_y = current[0];
		const here_x = current[1];

		for (let k = 0; k < 4; k++) {
			const y = here_y + p[k][0];
			const x = here_x + p[k][1];
			if (y >= H || y < 0 || x >= W || x < 0 || tbl[y][x] !== -1) {
				continue;
			}
			(tbl[y][x] = tbl[here_y][here_x] + 1), tbl[y][x];
			stack.push([y, x]);
		}
		i++;
	}

	let ans = 0;
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			ans = Math.max(ans, tbl[i][j]);
		}
	}
	console.log(ans);
}

function generate2DArray(m, n, v = 0) {
	return [...Array(m)].map(() => Array(n).fill(v));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
