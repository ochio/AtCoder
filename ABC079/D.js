'use strict';

function Main(input) {
	input = input.split('\n');
	const [H, W] = input[0].split(' ').map(Number);
	const p = [];
	for (let i = 0; i < 10; i++) {
		const tmp = input[1 + i].split(' ').map(Number);
		p.push(tmp);
	}

	const wall = [];
	for (let i = 0; i < H; i++) {
		const tmp = input[11 + i].split(' ').map(Number);
		wall.push(tmp);
	}

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			for (let k = 0; k < 10; k++) {
				p[j][k] = Math.min(p[j][k], p[j][i] + p[i][k]);
			}
		}
	}

	let ans = 0;
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			if (0 <= wall[i][j]) {
				ans += p[wall[i][j]][1];
			}
		}
	}

	console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
