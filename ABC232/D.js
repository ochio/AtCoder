'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);
	const tbl = [];

	for (let i = 0; i < H; i++) {
		const tmp = input[1 + i].split('');
		tbl.push(tmp);
	}

	const dist = [...Array(H)].map(() => Array(W).fill(0));
	const q = [[0, 0]];
	dist[0][0] = 1;

	const d = [
		[1, 0],
		[0, 1],
	];

	const visited = {};

	while (q.length) {
		const [current_H, current_W] = q.pop();

		for (let i = 0; i < d.length; i++) {
			const next_H = current_H + d[i][0];
			const next_W = current_W + d[i][1];

			if (!visited[`${next_H}-${next_W}`] && next_H < H && next_W < W && tbl[next_H][next_W] !== '#') {
				dist[next_H][next_W] = dist[current_H][current_W] + 1;
				visited[`${next_H}-${next_W}`] = true;
				q.push([next_H, next_W]);
			}
		}
	}

	let ans = 0;

	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			ans = Math.max(ans, dist[i][j]);
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
