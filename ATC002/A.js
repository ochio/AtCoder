'use strict';

function Main(input) {
	input = input.split('\n');
	const [R, C] = input[0].split(' ').map(Number);
	const [sy, sx] = input[1].split(' ').map(Number);
	const [gy, gx] = input[2].split(' ').map(Number);

	const maze = [];
	for (let i = 0; i < R; i++) {
		const tmp = input[3 + i].split('');
		maze.push(tmp);
	}

	const q = [[sy - 1, sx - 1]];
	maze[sy - 1][sx - 1] = 0;
	const p = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	while (q.length > 0) {
		const here_y = q[0][0];
		const here_x = q[0][1];
		for (let i = 0; i < 4; i++) {
			const y = q[0][0] + p[i][0];
			const x = q[0][1] + p[i][1];
			if (y >= R || y < 0 || x >= C || x < 0) {
				continue;
			} else {
				if (maze[y][x] === '.') {
					maze[y][x] = maze[here_y][here_x] + 1;
					q.push([y, x]);
				}
			}
		}
		q.shift();
	}

	console.log(maze[gy - 1][gx - 1]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
