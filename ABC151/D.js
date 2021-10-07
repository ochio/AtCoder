'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);

	let maze = [];

	let max = 0;
	let q = [];
	const d = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			maze = [];
			for (let i = 0; i < H; i++) {
				const tmp = input[1 + i].split('');
				maze.push(tmp);
			}
			if (maze[i][j] !== '#') {
				q = [[i, j]];

				maze[i][j] = 0;
				while (q.length > 0) {
					const here_y = q[0][0];
					const here_x = q[0][1];
					for (let k = 0; k < 4; k++) {
						const y = here_y + d[k][0];
						const x = here_x + d[k][1];
						if (y >= H || y < 0 || x >= W || x < 0) {
							continue;
						} else {
							if (maze[y][x] === '.') {
								maze[y][x] = maze[here_y][here_x] + 1;
								max = Math.max(max, maze[y][x]);
								q.push([y, x]);
							}
						}
					}
					q.shift();
				}
			}
		}
	}

	console.log(max);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
